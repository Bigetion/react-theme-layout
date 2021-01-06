import React, { useState, useEffect } from "react";

import { pageSidebarClass, siteHeaderClass, mobileWidth } from "./style";

import Navigation from "./Navigation";

export default function Sidebar(props) {
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
      setCollapsed(windowWidth > mobileWidth);
    };
    resizeListener();
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <div className={pageSidebarClass}>
      <header className={siteHeaderClass}>
        <div className={`${siteHeaderClass}-content`}>
          <h3>APP LOGO</h3>
        </div>
        <div
          className={`${siteHeaderClass}-mobile-menu`}
          onClick={() => {
            setCollapsed(!collapsed);
          }}
        >
          <i className="fa fa-bars" />
        </div>
      </header>
      <div style={{ display: collapsed ? "" : "none" }}>
        <Navigation
          {...props}
          onChange={(item) => {
            console.log(item);
          }}
        />
      </div>
    </div>
  );
}
