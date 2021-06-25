import React, { useState, useEffect } from 'react';
import { classNames } from 'css-hash';

import { mobileWidth } from './style';

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
        'page-container side-trans-enabled',
        !sidebar && !isMobile && 'sidebar-mini',
        showMenu && isMobile && 'sidebar-o-xs',
      )}
    >
      <div className="sidebar">
        <div className="content-header"></div>
        <div className="content-side"></div>
      </div>
      <div className="page-header">
        <div className="content-header">
          <div
            className="collapse-menu-button"
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
      <div className="main-container">{children}</div>
    </div>
  );
}
