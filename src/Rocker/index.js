import React, { useState, useEffect } from 'react';
import { classNames } from 'css-hash';

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
      className={classNames(layoutClass, showMenu && `${layoutClass}-toggled`)}
    >
      <div className={classNames(sidebarClass)}>
        <div className={classNames(brandLogoClass)}>
          <h3 style={{ paddingLeft: 20 }}>APP LOGO</h3>
        </div>
        <Navigation menus={menus} />
      </div>
      <header className={classNames(headerClass)}>
        <ul>
          <li>
            <span
              className={classNames(`${headerClass}-mobile-menu`)}
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              <i className="fa fa-bars" />
            </span>
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
