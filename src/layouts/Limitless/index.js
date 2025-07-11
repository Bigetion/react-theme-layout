import React, { useState, useEffect } from 'react';
import { classNames } from 'css-hash';
import { TiThMenu } from 'react-icons/ti';

import { useParams, useNavigate } from 'react-router-dom';

import Collapse from 'components/Collapse';

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

  const navigate = useNavigate();
  const { pathname } = useParams();

  const [sidebar, toggleSidebar] = useState(true);
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
        toggleSidebar(true);
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

  return (
    <div
      className={classNames(
        pageContainerClass,
        !sidebar && navigationCollapsedClass,
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
            <TiThMenu size={20} />
          </div>
        </header>
        <Collapse open={showMenu} disableAnimation={!isMobile}>
          <div
            style={{
              overflow: !isMobile && !sidebar ? 'initial' : 'hidden',
            }}
          >
            <Navigation
              collapsed={!sidebar}
              pathname={pathname}
              pathkey="menu_id"
              menus={menus}
              onChange={(item) => {
                navigate(`/${item.menu_id}`);
              }}
            />
          </div>
        </Collapse>
      </div>
      <div className={mainContainerClass}>
        <div className={mainHeaderClass}>
          <div
            className={`${mainHeaderClass}-collapse-menu`}
            onClick={() => {
              toggleSidebar(!sidebar);
            }}
          >
            <TiThMenu size={20} />
          </div>
          <div className={`${mainHeaderClass}-content`}></div>
        </div>
        <div className={mainContentClass}>{children}</div>
      </div>
    </div>
  );
}
