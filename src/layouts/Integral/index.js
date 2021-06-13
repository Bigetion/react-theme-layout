import React, { useState, useEffect } from 'react';
import { classNames } from 'css-hash';

import { useParams, useHistory } from 'react-router-dom';

import Collapse from './Collapse';

import {
  pageContainerClass,
  sidebarCollapsedClass,
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

  const history = useHistory();
  const { pathname } = useParams();

  const [collapsed, setCollapsed] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
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
        setCollapsed(false);
      }
      setIsMobile(windowWidth <= mobileWidth);
      setShowMenu(windowWidth > mobileWidth);
    };
    resizeListener();
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  const renderCollapse = (disableAnimation) => (
    <Collapse open={showMenu} disableAnimation={disableAnimation}>
      {(collapseProps) => (
        <div
          {...collapseProps}
          style={Object.assign(collapseProps.style, {
            overflow: !isMobile && collapsed ? 'initial' : 'hidden',
          })}
        >
          <Navigation
            collapsed={collapsed}
            pathname={pathname}
            pathkey="menu_id"
            menus={menus}
            onChange={(item) => {
              history.push(`/${item.menu_id}`);
            }}
          />
        </div>
      )}
    </Collapse>
  );

  return (
    <div
      className={classNames(
        pageContainerClass,
        collapsed && sidebarCollapsedClass,
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
        {!isMobile && renderCollapse(true)}
        {isMobile && renderCollapse(false)}
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
