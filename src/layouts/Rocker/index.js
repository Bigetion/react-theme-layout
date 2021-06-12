import React, { useState, useEffect } from 'react';
import { classNames } from 'css-hash';

import { useParams, useHistory } from 'react-router-dom';

import {
  layoutClass,
  sidebarClass,
  brandLogoClass,
  headerClass,
  contentClass,
  overlayClass,
  mobileWidth,
} from './style';

import Navigation from './Navigation';

import menus from './menus';

export default function Layout(props) {
  const { children } = props;

  const history = useHistory();
  const { pathname } = useParams();

  const [showMenu, setShowMenu] = useState(false);

  const getWindowWidth = () => {
    return (
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    );
  };

  useEffect(() => {
    const resizeListener = () => {
      const windowWidth = getWindowWidth();
      if (windowWidth <= mobileWidth) {
        setShowMenu(false);
      }
    };
    resizeListener();
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return (
    <div
      className={classNames(
        layoutClass,
        showMenu && `${layoutClass}-collapsed`,
      )}
    >
      <div className={classNames(sidebarClass)}>
        <div className={classNames(brandLogoClass)}>
          <h3 style={{ paddingLeft: 20 }}>APP LOGO</h3>
        </div>
        <Navigation
          pathname={pathname}
          pathkey="menu_id"
          menus={menus}
          onChange={(item) => {
            history.push(`/${item.menu_id}`);
          }}
        />
      </div>
      <header className={classNames(headerClass)}>
        <ul>
          <li>
            <div
              className={classNames(`${headerClass}-mobile-menu`)}
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              <i className="fa fa-bars" style={{ margin: 'o auto' }} />
            </div>
          </li>
        </ul>
      </header>
      <div className={classNames(contentClass)}>{children}</div>
      <div
        className={classNames(overlayClass)}
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      ></div>
    </div>
  );
}
