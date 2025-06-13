import React, { useState, useEffect, createContext, useContext } from 'react';
import { classNames } from 'css-hash';
import { HiOutlineChevronRight } from 'react-icons/hi';

import Collapse from 'components/Collapse';

import { navigationClass } from './style';

const NavigationContext = createContext();

function Item(props) {
  const { icon = '', title = '', children, menu_id, type = '' } = props;

  const { onClickMenu = () => {}, activeId } = useContext(NavigationContext);

  const clickProps = Object.assign({}, props);

  if (children) {
    return <MultiItem {...props} />;
  }

  const isActive = activeId === menu_id;

  if (type === 'navigation-header') {
    return <li className="title">{title}</li>;
  }
  return (
    <li
      onClick={(e) => {
        e.stopPropagation();
        onClickMenu(clickProps, true);
      }}
      className={classNames(isActive && 'active')}
    >
      <a>
        {icon && (
          <i className="menu-icon">
            <props.icon />
          </i>
        )}
        <span>{title}</span>
      </a>
    </li>
  );
}

function MultiItem(props) {
  const { icon, title, children = [], level_index, menu_id } = props;

  const {
    onClickMenu = () => {},
    activeMenuId,
    collapsed,
    clickedMenuId,
    lastClickedMenuId,
  } = useContext(NavigationContext);

  const clickProps = Object.assign({}, props);

  const isActive = activeMenuId.indexOf(menu_id) >= 0;

  let isDisableAnimation = false;
  if ([clickedMenuId, lastClickedMenuId].indexOf(menu_id) < 0) {
    isDisableAnimation = true;
  }
  if (
    [
      clickedMenuId.indexOf(menu_id) >= 0,
      lastClickedMenuId.indexOf(menu_id) >= 0,
    ].indexOf(true) >= 0
  ) {
    isDisableAnimation = false;
  }

  const renderCollapse = (open) => (
    <Collapse open={open} disableAnimation={open && isDisableAnimation}>
      <ul>
        {children.map((item, index) => (
          <React.Fragment key={index}>
            <Item {...item} />
          </React.Fragment>
        ))}
      </ul>
    </Collapse>
  );

  return (
    <li
      className={classNames('has-sub', isActive && 'active')}
      onClick={(e) => {
        e.stopPropagation();
        onClickMenu(clickProps, true);
      }}
    >
      <a>
        {icon && (
          <i className="menu-icon">
            <props.icon />
          </i>
        )}
        <span>{title}</span>
        {!(collapsed && level_index === 1) && (
          <Collapse.Icon open={isActive} disableAnimation={isDisableAnimation}>
            <i className="collapse-icon">
              <HiOutlineChevronRight />
            </i>
          </Collapse.Icon>
        )}
      </a>
      {!collapsed && renderCollapse(isActive)}
      {collapsed && renderCollapse(isActive || level_index === 1)}
    </li>
  );
}

export default function Navigation(props) {
  const {
    collapsed,
    menus = [],
    onChange = () => {},
    pathname,
    pathkey,
  } = props;

  const [activeMenuId, setActiveMenuId] = useState('');
  const [activeId, setActivePath] = useState('');
  const [clickedMenuId, setClickedMenuId] = useState('');
  const [lastClickedMenuId, setLastClickedMenuId] = useState('');

  const onClickMenu = (item, isClickEvent) => {
    if (item.children) {
      if (
        item.menu_id === activeMenuId ||
        activeMenuId.indexOf(`${item.menu_id}_`) >= 0
      ) {
        setActiveMenuId(item.parent_id);
      } else {
        setActiveMenuId(item.menu_id);
      }
      setLastClickedMenuId(clickedMenuId);
      setClickedMenuId(item.menu_id);
    } else {
      setActivePath(item.menu_id);
      setActiveMenuId(item.parent_id);
      if (isClickEvent) {
        onChange(item);
      }
    }
  };

  const addMenuIndex = (parentId = '', levelIndex, items = [], callback) => {
    return items.map((item, index) => {
      const menu_id = `${parentId ? `${parentId}_` : ''}${index + 1}_`;
      const newItem = Object.assign({}, item, {
        parent_id: parentId,
        level_index: levelIndex,
        menu_id,
      });
      if (item.children) {
        newItem.children = addMenuIndex(
          menu_id,
          levelIndex + 1,
          item.children,
          callback,
        );
      }
      if (callback) {
        callback(newItem);
      }
      return newItem;
    });
  };

  useEffect(
    () => {
      addMenuIndex('MENU', 1, menus, (item) => {
        if (item[pathkey] === pathname) {
          onClickMenu(item);
        } else {
          setLastClickedMenuId('');
          setClickedMenuId('');
        }
      });
    },
    // eslint-disable-next-line
    [collapsed, pathname],
  );

  const menusWithMenuId = addMenuIndex('MENU', 1, menus);

  return (
    <NavigationContext.Provider
      value={{
        onClickMenu,
        activeMenuId,
        activeId,
        collapsed,
        clickedMenuId,
        lastClickedMenuId,
      }}
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
