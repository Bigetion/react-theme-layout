import React, { useState, useEffect } from 'react';
import { classNames } from 'css-hash';

import { TiThMenu } from 'react-icons/ti';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi';

import { useParams, useNavigate } from 'react-router-dom';

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

import Navigation from './Navigation';

import menus from './menus';

export default function Layout(props) {
  const { children } = props;

  const navigate = useNavigate();
  const { pathname } = useParams();

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
          <div>APP LOGO</div>
          <div
            className={`${pageHeaderLogoClass}-collapse-menu`}
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            {showMenu ? (
              <TiThMenu size={20} style={{ display: 'block' }} />
            ) : (
              <BsThreeDotsVertical size={20} />
            )}
          </div>
        </div>
        <ul className={classNames(pageHeaderMenuClass, 'pull-right')}></ul>
      </div>
      <div className={pageContainerClass}>
        <div className={pageSidebarClass}>
          <Navigation
            pathname={pathname}
            pathkey="menu_id"
            menus={menus}
            onChange={(item) => {
              navigate(`/${item.menu_id}`);
            }}
          />
        </div>
        <div className={pageContentClass}>{children}</div>
      </div>
    </div>
  );
}
