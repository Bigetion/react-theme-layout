import React, { useState, useEffect, createContext, useContext } from 'react';
import { classNames } from 'css-hash';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Collapse from 'components/Collapse';

import { navigationClass } from './style';

const NavigationContext = createContext();

function ItemRoundRadius() {
  return (
    <React.Fragment>
      <div className="box" />
      <div className="round-before">
        <div className="round-content">
          <div className="round-radius" />
        </div>
      </div>
      <div className="round-after">
        <div className="round-content">
          <div className="round-radius" />
        </div>
      </div>
    </React.Fragment>
  );
}

function Item(props) {
  const { icon = '', title = '', children, menu_id, level_index } = props;

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
        onClickMenu(clickProps, true);
      }}
      className={classNames(isActive && 'active')}
    >
      <a>
        {icon && <FontAwesomeIcon icon={icon} className="menu-icon" />}
        <span>{title}</span>
        {isActive && level_index === 1 && <ItemRoundRadius />}
      </a>
    </li>
  );
}

function MultiItem(props) {
  const { icon, title, children = [], level_index, menu_id } = props;

  const {
    onClickMenu = () => {},
    activeTopLeveId,
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
      className={classNames(activeTopLeveId === menu_id && 'active')}
      onClick={(e) => {
        e.stopPropagation();
        onClickMenu(clickProps, true);
      }}
    >
      <a className="has-sub">
        {icon && <FontAwesomeIcon icon={icon} className="menu-icon" />}
        <span>{title}</span>
        {activeTopLeveId === menu_id && level_index === 1 && (
          <ItemRoundRadius />
        )}
        <div />
        {!(collapsed && level_index === 1) && (
          <Collapse.Icon open={isActive} disableAnimation={isDisableAnimation}>
            <div className="collapse-icon">
              <FontAwesomeIcon icon={faChevronRight} size="sm" />
            </div>
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
  const [activeId, setActiveId] = useState('');
  const [activeTopLeveId, setActiveTopLevelId] = useState('');
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
      setActiveId(item.menu_id);
      setActiveMenuId(item.parent_id);
      if (isClickEvent) {
        onChange(item);
      }
    }
  };

  const addMenuIndex = (parentId = '', levelIndex, items = [], callback) => {
    return items.map((item, index) => {
      const menu_id = `${parentId ? `${parentId}_` : ''}${index + 1}`;
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
          const menuIdArray = item.menu_id.split('_');
          if (menuIdArray.length > 2) {
            setActiveTopLevelId(menuIdArray.slice(0, 2).join('_'));
          } else {
            setActiveId(item.menu_id);
            setActiveTopLevelId('');
          }
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
        activeTopLeveId,
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
