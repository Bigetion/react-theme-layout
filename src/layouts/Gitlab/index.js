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
      if (windowWidth <= mobileWidth) {
        setCollapsed(true);
      }
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
      <div className={classNames(navbarClass)}></div>
      <div className={classNames(layoutPageClass)}>
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
