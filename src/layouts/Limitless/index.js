import React, { useState, useEffect } from 'react';
import { classNames } from 'css-hash';

import {
  pageContainerClass,
  navigationCollapsedClass,
  mainContentClass,
  mainHeaderClass,
  mainContainerClass,
  pageSidebarClass,
  siteHeaderClass,
  mobileWidth,
} from './style';

import Navigation from './Navigation';

import menus from './menus';

export default function Layout(props) {
  const { children } = props;

  const [collapsed, setCollapsed] = useState(false);
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
        setCollapsed(false);
      }
      setShowMenu(windowWidth > mobileWidth);
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
        pageContainerClass,
        collapsed && navigationCollapsedClass,
      )}
    >
      <div className={pageSidebarClass}>
        <header className={siteHeaderClass}>
          <div className={`${siteHeaderClass}-content`}>
            <h3>APP LOGO</h3>
          </div>
          <div
            className={`${siteHeaderClass}-mobile-menu`}
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <i className="fa fa-bars" />
          </div>
        </header>
        <div style={{ display: showMenu ? '' : 'none' }}>
          <Navigation
            collapsed={collapsed}
            menus={menus}
            onChange={(item) => {
              console.log(item);
            }}
          />
        </div>
      </div>
      <div className={mainContainerClass}>
        <div className={mainHeaderClass}>
          <div
            className={`${mainHeaderClass}-collapse-menu`}
            onClick={() => {
              setCollapsed(!collapsed);
            }}
          >
            <i className="fa fa-bars" />
          </div>
          <div className={`${mainHeaderClass}-content`}></div>
        </div>
        <div className={mainContentClass}>{children}</div>
      </div>
    </div>
  );
}