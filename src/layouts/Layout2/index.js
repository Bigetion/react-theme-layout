import React, { useState, useEffect } from 'react';
import { classNames } from 'css-hash';

import {
  layoutClass,
  pageHeaderClass,
  pageHeaderMenuClass,
  pageHeaderLogoClass,
  pageContainerClass,
  pageSidebarClass,
  pageSidebarCollapsedClass,
  pageContentClass,
  mobileWidth,
} from './style';

export default function Layout(props) {
  const { children } = props;

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
      setShowMenu(windowWidth < mobileWidth);
    };
    resizeListener();
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return (
    <div
      className={classNames(layoutClass, showMenu && pageSidebarCollapsedClass)}
    >
      <div className={pageHeaderClass}>
        <div className={pageHeaderLogoClass}>
          <span>APP LOGO</span>
          <span
            className={`${pageHeaderLogoClass}-collapse-menu`}
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <i className={`fa fa-${showMenu ? 'bars' : 'ellipsis-v'}`} />
          </span>
        </div>
        <ul className={classNames(pageHeaderMenuClass, 'pull-right')}></ul>
      </div>
      <div className={pageContainerClass}>
        <div className={pageSidebarClass}></div>
        <div className={pageContentClass}>{children}</div>
      </div>
    </div>
  );
}
