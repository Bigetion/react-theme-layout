import React, { useState, useEffect } from 'react';
import { classNames } from 'css-hash';

import { HiChevronDoubleLeft } from 'react-icons/hi';

import {
  layoutPageClass,
  navbarClass,
  sidebarClass,
  sidebarInnerClass,
  sidebarNavigationClass,
  layoutContentClass,
  sidebarToggleBtnClass,
  mobileWidth,
  collapsedWidth,
} from './style';

export default function Layout(props) {
  const { children } = props;

  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
      setCollapsed(windowWidth <= collapsedWidth);
      setIsMobile(windowWidth <= mobileWidth);
    };
    resizeListener();
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return (
    <div>
      <div className={classNames(navbarClass)}>
        <div className="header-content">
          <div className="brand-logo">Logo</div>
        </div>
      </div>
      <div
        className={classNames(
          layoutPageClass,
          !isMobile && collapsed && 'collapsed-desktop',
        )}
      >
        <div
          className={classNames(
            sidebarClass,
            !isMobile && collapsed && 'collapsed-desktop',
          )}
        >
          <div className={classNames(sidebarInnerClass)}>
            <div className={classNames(sidebarNavigationClass)}>
              <div style={{ width: '100%', height: 720 }}></div>
            </div>
            <div
              className={classNames(sidebarToggleBtnClass)}
              onClick={() => {
                setCollapsed(!collapsed);
              }}
            >
              <div className="collapse-icon">
                <HiChevronDoubleLeft size={20} />
              </div>
              <div className="collapse-text">Collapse sidebar</div>
            </div>
          </div>
        </div>
        <div className={classNames(layoutContentClass)}>{children}</div>
      </div>
    </div>
  );
}
