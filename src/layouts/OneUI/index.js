import React, { useState, useEffect } from 'react';
import { classNames } from 'css-hash';
import { TiThMenu } from 'react-icons/ti';
import { CgClose } from 'react-icons/cg';

import { useParams, useHistory } from 'react-router-dom';

import {
  pageContainerClass,
  pageHeaderClass,
  sidebarClass,
  contentHeaderClass,
  mainContainerClass,
  mobileWidth,
} from './style';

import Navigation from './Navigation';

import menus from './menus';

export default function Layout(props) {
  const { children } = props;

  const history = useHistory();
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
        !sidebar && !isMobile && `${pageContainerClass}-sidebar-mini`,
        showMenu && isMobile && `${pageContainerClass}-sidebar-full`,
      )}
    >
      <div className={sidebarClass}>
        <div className={contentHeaderClass}>
          <div className={`${contentHeaderClass}-logo`}>
            <h3>APP LOGO</h3>
          </div>
          {isMobile && showMenu && (
            <div
              className={`${contentHeaderClass}-close-button`}
              onClick={() => {
                setShowMenu(false);
              }}
            >
              <CgClose size={20} />
            </div>
          )}
        </div>
        <div className={`${sidebarClass}-js-sidebar-scroll`}>
          <div className={`${sidebarClass}-content-side`}>
            <Navigation
              pathname={pathname}
              pathkey="menu_id"
              menus={menus}
              onChange={(item) => {
                if (isMobile && showMenu) {
                  setShowMenu(false);
                }
                history.push(`/${item.menu_id}`);
              }}
            />
          </div>
        </div>
      </div>
      <div className={pageHeaderClass}>
        <div className={contentHeaderClass}>
          <div
            className={`${contentHeaderClass}-collapse-button`}
            onClick={() => {
              if (!isMobile) {
                toggleSidebar(!sidebar);
              } else {
                setShowMenu(!showMenu);
              }
            }}
          >
            <TiThMenu size={20} />
          </div>
        </div>
      </div>
      <div className={mainContainerClass}>{children}</div>
    </div>
  );
}
