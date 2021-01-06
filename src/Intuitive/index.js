import React, { useState, useEffect } from "react";
import { classNames } from "css-hash";

import {
  layoutClass,
  pageHeaderClass,
  pageHeaderLogoClass,
  pageContainerClass,
  pageSidebarClass,
  pageSidebarCollapsedClass,
  pageContentClass,
  mobileWidth,
} from "./style";

import Navigation from "./Navigation";

import menus from "./menus";

export default function Layout(props) {
  const { children } = props;

  const [collapsed, setCollapsed] = useState(false);

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
      setCollapsed(windowWidth < mobileWidth);
    };
    resizeListener();
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <div
      className={classNames(
        layoutClass,
        collapsed && pageSidebarCollapsedClass
      )}
    >
      <div className={pageHeaderClass}>
        <div className={pageHeaderLogoClass}>
          <span>APP LOGO</span>
          <span
            className={`${pageHeaderLogoClass}-collapse-menu`}
            onClick={() => {
              setCollapsed(!collapsed);
            }}
          >
            <i className={`fa fa-${collapsed ? "bars" : "ellipsis-v"}`} />
          </span>
        </div>
        <div className=""></div>
      </div>
      <div className={pageContainerClass}>
        <div className={pageSidebarClass}>
          <Navigation menus={menus} />
        </div>
        <div className={pageContentClass}>{children}</div>
      </div>
    </div>
  );
}
