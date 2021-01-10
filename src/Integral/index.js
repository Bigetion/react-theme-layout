import React, { useState, useEffect } from 'react';
import { classNames } from 'css-hash';

import {
  pageContainerClass,
  sidebarCollapsedClass,
  mainContentClass,
  mainHeaderClass,
  mainContainerClass,
  mobileWidth,
} from './style';

import Sidebar from './Sidebar';

import menus from './menus';

export default function Layout(props) {
  const { children } = props;

  const [collapsed, setCollapsed] = useState(false);

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
    };
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return (
    <div
      className={classNames(
        pageContainerClass,
        collapsed && sidebarCollapsedClass,
      )}
    >
      <Sidebar collapsed={collapsed} menus={menus} />
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
