import React, { createContext, useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { classNames } from 'css-hash';

import Popper from 'components/Popper';

import { sidebarNavigationClass } from './style';

const NavigationContext = createContext();

function ItemLink(props) {
  const { icon, title = '', children, level_index } = props;

  const navigate = useNavigate();

  const { pathkey } = useContext(NavigationContext);

  let path = props[pathkey];
  if (children) {
    path = children[0][pathkey];
  }

  const onClick = () => {
    navigate(path);
  };

  if (level_index > 1) {
    return (
      <Link to={path} onClick={onClick}>
        {title}
      </Link>
    );
  }

  return (
    <Link to={path} onClick={onClick}>
      {icon && <span className="nav-item-icon">{icon}</span>}
      <span className="nav-item-name">{title}</span>
    </Link>
  );
}

function MultiItem(props) {
  const { title, children = [], showHeader } = props;

  const { activeMenuId } = useContext(NavigationContext);

  return (
    <ul>
      {showHeader && (
        <li>
          <div className="popup-header">{title}</div>
        </li>
      )}
      {children.map((item, index) => {
        const isActiveItem = activeMenuId.indexOf(item.menu_id) >= 0;
        return (
          <li key={index} className={classNames(isActiveItem && 'active')}>
            <ItemLink {...item} />
          </li>
        );
      })}
    </ul>
  );
}

function Item(props) {
  const { title, children = [], menu_id } = props;

  const { collapsed, isMobile, activeMenuId } = useContext(NavigationContext);

  const isActiveItem = activeMenuId.indexOf(menu_id) >= 0;

  return (
    <Popper
      hovered
      options={{
        placement: 'right-start',
        strategy: 'fixed',
      }}
    >
      {(referenceRef, popperRef, { attributes, open }) => (
        <li ref={referenceRef} className={classNames(isActiveItem && 'active')}>
          <ItemLink {...props} />
          {children.length === 0 && (
            <React.Fragment>
              {open && collapsed && !isMobile && (
                <div
                  ref={popperRef}
                  {...attributes.popper}
                  className="popup-menu popup-tooltip"
                >
                  <span className="tooltip-triangle" />
                  <ul>
                    <li>
                      <div className="popup-header">{title}</div>
                    </li>
                  </ul>
                </div>
              )}
            </React.Fragment>
          )}
          {children.length > 0 && (
            <React.Fragment>
              {open && (collapsed || !isActiveItem) && !isMobile && (
                <div
                  ref={popperRef}
                  {...attributes.popper}
                  className="popup-menu"
                >
                  <MultiItem {...props} showHeader={collapsed} />
                </div>
              )}
              {isActiveItem && !collapsed && (
                <div className="sub-menu">
                  <MultiItem {...props} />
                </div>
              )}
            </React.Fragment>
          )}
        </li>
      )}
    </Popper>
  );
}

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

export default function Navigation(props) {
  const { menus = [], collapsed, isMobile, pathkey } = props;

  const { pathname } = useParams();

  const [activeMenuId, setActiveMenuId] = useState('');

  const menusWithMenuId = addMenuIndex('MENU', 1, menus);

  const checkActiveMenu = () => {
    addMenuIndex('MENU', 1, menus, (item) => {
      if (item[pathkey] === pathname) {
        setActiveMenuId(item.menu_id);
      }
    });
  };

  useEffect(
    () => {
      checkActiveMenu();
    },
    // eslint-disable-next-line
    [pathname],
  );

  return (
    <NavigationContext.Provider
      value={{ collapsed, isMobile, pathkey, activeMenuId }}
    >
      <ul className={classNames(sidebarNavigationClass)}>
        {menusWithMenuId.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </NavigationContext.Provider>
  );
}
