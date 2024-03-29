import React, { useState, useEffect } from 'react';
import { classNames } from 'css-hash';

import Collapse from 'components/Collapse';

import {
  pageContainerClass,
  mainContentClass,
  mainHeaderClass,
  mainContainerClass,
  pageSidebarClass,
  siteHeaderClass,
  mobileWidth,
} from './style';

export default function Layout(props) {
  const { children } = props;

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
        !sidebar && `${pageContainerClass}-collapsed`,
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
        <Collapse
          open={showMenu}
          disableAnimation={!isMobile}
          style={{
            overflow: !isMobile && !sidebar ? 'initial' : 'hidden',
          }}
        >
          <div></div>
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
            <i className="fa fa-bars" />
          </div>
          <div className={`${mainHeaderClass}-content`}></div>
        </div>
        <div className={mainContentClass}>{children}</div>
      </div>
    </div>
  );
}
