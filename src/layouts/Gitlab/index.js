import React, { useState, useEffect } from 'react';
import { classNames } from 'css-hash';

import { CgClose } from 'react-icons/cg';
import { TiThMenu } from 'react-icons/ti';
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
      setCollapsed(windowWidth <= collapsedWidth);
      setIsMobile(windowWidth <= mobileWidth);
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
    <div>
      <div className={classNames(navbarClass)}>
        <div className="header-content">
          <div className="mobile-menu">
            <div
              className="toggle-bar"
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              <TiThMenu size={20} />
            </div>
          </div>
          <div className="brand-logo">Logo</div>
        </div>
      </div>
      <div
        className={classNames(
          layoutPageClass,
          !isMobile && collapsed && 'collapsed',
          isMobile && showMenu && 'expanded-menu',
        )}
      >
        <div className={classNames(sidebarClass)}>
          <div className={classNames(sidebarInnerClass)}>
            <div className={classNames(sidebarNavigationClass)}>
              <div style={{ width: '100%', height: 720 }}></div>
            </div>
            <div
              className={classNames(sidebarToggleBtnClass)}
              onClick={() => {
                if (isMobile) {
                  setShowMenu(false);
                } else {
                  setCollapsed(!collapsed);
                }
              }}
            >
              <div className="collapse-icon">
                {isMobile ? (
                  <CgClose size={20} />
                ) : (
                  <HiChevronDoubleLeft size={20} />
                )}
              </div>
              <div className="collapse-text">
                {isMobile ? 'Close sidebar' : 'Collapse sidebar'}
              </div>
            </div>
          </div>
        </div>
        <div className={classNames(layoutContentClass)}>{children}</div>
        <div
          className="mobile-menu-overlay"
          onClick={() => {
            setShowMenu(false);
          }}
        />
      </div>
    </div>
  );
}
