import React, { useState, useEffect } from 'react';
import { classNames } from 'css-hash';

import { useParams, useNavigate } from 'react-router-dom';

import { TiThMenu } from 'react-icons/ti';

import Collapse from 'components/Collapse';

import {
  appClass,
  appContainerClass,
  sideNavClass,
  sideNavHeaderClass,
  sideNavLogoClass,
  mobileMenuClass,
  contentClass,
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
    <div className={classNames(appClass)}>
      <div className={classNames(appContainerClass)}>
        <div className={classNames(sideNavClass)}>
          <div className={classNames(sideNavHeaderClass)}>
            <div className={classNames(sideNavLogoClass)}>
              <span>AAR</span>
            </div>
            <div
              className={classNames(mobileMenuClass)}
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              <TiThMenu size={20} />
            </div>
          </div>
          <Collapse open={showMenu} disableAnimation={!isMobile}>
            <div>
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
        <div className={classNames(contentClass)}>{children}</div>
      </div>
    </div>
  );
}
