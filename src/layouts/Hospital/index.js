import React, { useState, useEffect } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { classNames } from 'css-hash';

import { useParams, useHistory } from 'react-router-dom';

import Collapse from 'components/Collapse';
import IconContainer from 'components/IconContainer';

import {
  gradientBackgroundClass,
  pageContainerClass,
  navigationCollapsedClass,
  mainContentClass,
  mainHeaderClass,
  mainHeaderContentClass,
  collapseMenuClass,
  mainContainerClass,
  pageSidebarClass,
  siteHeaderClass,
  siteHeaderContentClass,
  mobileMenuClass,
  mobileWidth,
} from './style';

import Navigation from './Navigation';

import menus from './menus';

export default function Layout(props) {
  const { children } = props;

  const history = useHistory();
  const { pathname } = useParams();

  const [sidebar, toggleSidebar] = useState(true);

  const getWindowWidth = () => {
    return (
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    );
  };

  const windowWidth = getWindowWidth();
  const [showMenu, setShowMenu] = useState(
    windowWidth <= mobileWidth ? false : true,
  );
  const [isMobile, setIsMobile] = useState(false);

  useEffect(
    () => {
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
    },
    // eslint-disable-next-line
    [],
  );

  return (
    <React.Fragment>
      <div className={gradientBackgroundClass} />
      <div
        className={classNames(
          pageContainerClass,
          !sidebar && navigationCollapsedClass,
        )}
      >
        <div className={pageSidebarClass}>
          <header className={siteHeaderClass}>
            <div className={siteHeaderContentClass}></div>
            <div
              className={mobileMenuClass}
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              <IconContainer icon={TiThMenu} />
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
                  history.push(`/${item.menu_id}`);
                }}
              />
            </div>
          </Collapse>
        </div>
        <div className={mainContainerClass}>
          <div className={mainHeaderClass}>
            <div
              className={collapseMenuClass}
              onClick={() => {
                toggleSidebar(!sidebar);
              }}
            >
              <IconContainer
                icon={sidebar ? BsArrowLeftShort : BsArrowRightShort}
              />
            </div>
            <div className={mainHeaderContentClass}></div>
          </div>
          <div className={mainContentClass}>{children}</div>
        </div>
      </div>
    </React.Fragment>
  );
}
