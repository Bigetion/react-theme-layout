import React, { useState, useEffect } from 'react';
import { classNames } from 'css-hash';

import { CgClose } from 'react-icons/cg';
import { TiThMenu } from 'react-icons/ti';
import { HiChevronDoubleLeft } from 'react-icons/hi';

import {
  layoutPageClass,
  headerClass,
  headerContentClass,
  toggleBarContainerClass,
  toggleBarClass,
  sidebarClass,
  sidebarInnerClass,
  sidebarNavigationClass,
  layoutContentClass,
  sidebarToggleBtnClass,
  menuOverlayClass,
  menuOverlayExpandedClass,
  mobileWidth,
  tabletWidth,
} from './style';

export default function Layout(props) {
  const { children } = props;

  const [collapsed, setCollapsed] = useState(false);
  const [expanded, setExpanded] = useState(false);
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
      setCollapsed(windowWidth <= tabletWidth);
      setIsMobile(windowWidth <= mobileWidth);
      if (windowWidth <= mobileWidth) {
        setExpanded(false);
      }
    };
    resizeListener();
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return (
    <div>
      <div className={classNames(headerClass)}>
        <div className={classNames(headerContentClass)}>
          <div className={classNames(toggleBarContainerClass)}>
            <div
              className={classNames(toggleBarClass)}
              onClick={() => {
                setExpanded(!expanded);
              }}
            >
              <TiThMenu size={20} />
            </div>
          </div>
          <div className="brand-logo">Logo</div>
        </div>
      </div>
      <div
        className={classNames(
          layoutPageClass,
          !isMobile && collapsed && 'collapsed',
          isMobile && expanded && 'expanded',
        )}
      >
        <div className={classNames(sidebarClass)}>
          <div className={classNames(sidebarInnerClass)}>
            <div className={classNames(sidebarNavigationClass)}>
              <div style={{ width: '100%', height: 720 }}></div>
            </div>
            <div
              className={classNames(sidebarToggleBtnClass)}
              onClick={() => {
                if (isMobile) {
                  setExpanded(false);
                } else {
                  setCollapsed(!collapsed);
                }
              }}
            >
              <div className="collapse-icon">
                {isMobile ? (
                  <CgClose size={16} />
                ) : (
                  <HiChevronDoubleLeft size={16} />
                )}
              </div>
              <div className="collapse-text">
                {isMobile ? 'Close sidebar' : 'Collapse sidebar'}
              </div>
            </div>
          </div>
        </div>
        <div className={classNames(layoutContentClass)}>{children}</div>
        <div
          className={classNames(
            menuOverlayClass,
            expanded && menuOverlayExpandedClass,
          )}
          onClick={() => {
            setExpanded(false);
          }}
        />
      </div>
    </div>
  );
}
