import React, { useState, useEffect } from 'react';
import { classNames } from 'css-hash';

import { CgClose } from 'react-icons/cg';
import { TiThMenu } from 'react-icons/ti';
import { HiChevronDoubleLeft } from 'react-icons/hi';

import {
  mobileWidth,
  tabletWidth,
  headerClass,
  headerContentClass,
  toggleBarContainerClass,
  toggleBarClass,
  layoutPageClass,
  layoutPageCollapsedClass,
  layoutPageExpandedClass,
  sidebarClass,
  sidebarInnerClass,
  collapseBtnClass,
  collapseIconClass,
  collapseLabelClass,
  menuOverlayClass,
  menuOverlayExpandedClass,
  layoutContentClass,
} from './style';

import Navigation from './Navigation';

import menus from './menus';

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
          <div>
            <b>Logo</b>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          layoutPageClass,
          !isMobile && collapsed && layoutPageCollapsedClass,
          isMobile && expanded && layoutPageExpandedClass,
        )}
      >
        <div className={classNames(sidebarClass)}>
          <div className={classNames(sidebarInnerClass)}>
            <Navigation
              menus={menus}
              collapsed={collapsed}
              expanded={expanded}
              isMobile={isMobile}
              pathName=""
              pathkey="menu_id"
            />
            <div
              className={classNames(collapseBtnClass)}
              onClick={() => {
                if (isMobile) {
                  setExpanded(false);
                } else {
                  setCollapsed(!collapsed);
                }
              }}
            >
              <div className={classNames(collapseIconClass)}>
                {isMobile ? (
                  <CgClose size={16} />
                ) : (
                  <HiChevronDoubleLeft size={16} />
                )}
              </div>
              <div className={collapseLabelClass}>
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
