import React, { useState, createContext, useContext } from 'react';

import { classNames } from 'css-hash';

import Collapse from 'components/Collapse';

import { navigationClass } from './style';

const NavigationContext = createContext();

function Item(props) {
  const { icon = '', title = '', children, menu_id } = props;

  const { onClickMenu = () => {}, activeId } = useContext(NavigationContext);

  const clickProps = Object.assign({}, props);

  if (children) {
    return <MultiItem {...props} />;
  }

  const isActive = activeId === menu_id;
  return (
    <li
      onClick={(e) => {
        e.stopPropagation();
        onClickMenu(clickProps);
      }}
      className={classNames(isActive && 'active')}
    >
      <a>
        {icon && <i className={icon} />}
        <span className="title">{title}</span>
      </a>
    </li>
  );
}

function MultiItem(props) {
  const { icon, title, children = [], level_index, menu_id } = props;

  const { onClickMenu = () => {}, activeMenuId, collapsed } = useContext(
    NavigationContext,
  );

  const clickProps = Object.assign({}, props);

  let isActive = activeMenuId.indexOf(menu_id) >= 0;

  let showSubMenu = isActive;
  if (collapsed) {
    if (level_index === 1) {
      showSubMenu = true;
    }
  }
  return (
    <li
      className={classNames('has-sub', isActive && 'active')}
      onClick={(e) => {
        e.stopPropagation();
        onClickMenu(clickProps);
      }}
    >
      <a>
        {icon && <i className={icon} />}
        <span className="title">{title}</span>
      </a>
      <Collapse open={showSubMenu}>
        {(ref, className) => (
          <ul ref={ref} className={className}>
            {children.map((item, index) => (
              <React.Fragment key={index}>
                <Item {...item} />
              </React.Fragment>
            ))}
          </ul>
        )}
      </Collapse>
    </li>
  );
}

export default function Navigation(props) {
  const { collapsed, menus = [], onChange = () => {} } = props;

  const [activeMenuId, setActiveMenuId] = useState('');
  const [activeId, setActivePath] = useState('');

  const onClickMenu = (item) => {
    if (item.children) {
      if (
        item.menu_id === activeMenuId ||
        activeMenuId.indexOf(`${item.menu_id}_`) >= 0
      ) {
        setActiveMenuId(item.parent_id);
      } else {
        setActiveMenuId(item.menu_id);
      }
    } else {
      setActivePath(item.menu_id);
      setActiveMenuId(item.parent_id);
      onChange(item);
    }
  };

  const addMenuIndex = (parentId = '', levelIndex, items = []) => {
    return items.map((item, index) => {
      const menu_id = `${parentId ? `${parentId}_` : ''}${index + 1}`;
      const newItem = Object.assign({}, item, {
        parent_id: parentId,
        level_index: levelIndex,
        menu_id,
      });
      if (item.children) {
        newItem.children = addMenuIndex(menu_id, levelIndex + 1, item.children);
      }
      return newItem;
    });
  };

  const menusWithMenuId = addMenuIndex('MENU', 1, menus);

  return (
    <NavigationContext.Provider
      value={{ onClickMenu, activeMenuId, activeId, collapsed }}
    >
      <ul className={navigationClass}>
        {menusWithMenuId.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Item {...item} />
            </React.Fragment>
          );
        })}
      </ul>
    </NavigationContext.Provider>
  );
}