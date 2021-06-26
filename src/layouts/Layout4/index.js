import React, { useState, useEffect } from 'react';
import { classNames } from 'css-hash';

import {
  pageContainerClass,
  pageHeaderClass,
  sidebarClass,
  contentHeaderClass,
  mainContainerClass,
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
        !sidebar && !isMobile && `${pageContainerClass}-sidebar-mini`,
        showMenu && isMobile && `${pageContainerClass}-sidebar-full`,
      )}
    >
      <div className={sidebarClass}>
        <div className={contentHeaderClass}>
          <div>
            <h2>APP LOGO</h2>
          </div>
          {isMobile && showMenu && (
            <div
              className={`${contentHeaderClass}-close-button`}
              onClick={() => {
                setShowMenu(false);
              }}
            >
              <i className="fa fa-close" />
            </div>
          )}
        </div>
        <div className={`${sidebarClass}-js-sidebar-scroll`}>
          <div className={`${sidebarClass}-simplebar-wrapper`}>
            <div className={`${sidebarClass}-simplebar-mask`}>
              <div className={`${sidebarClass}-simplebar-offset`}>
                <div className={`${sidebarClass}-simplebar-content-wrapper`}>
                  <div className={`${sidebarClass}-simplebar-content`}>
                    <div className={`${sidebarClass}-content-side`}></div>
                  </div>
                </div>
              </div>
            </div>
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
            <i className="fa fa-fw fa-ellipsis-v" />
          </div>
        </div>
      </div>
      <div className={mainContainerClass}>{children}</div>
    </div>
  );
}
