import { cssHash } from 'css-hash';

export const theme = {
  mobileWidth: 767,

  layout: {
    bg: '#FFFFFF',
  },

  sidebar: {
    width: 280,
    collapsedWidth: 60,
    bg: '#2C365A',
    zIndex: 101,
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.25)',
  },

  siteHeader: {
    height: 60,
    bg: '#2C365A',
    color: '#FFFFFF',
    borderBottom: '1px solid #252F54',
    contentPadding: '0 20px',
    zIndex: 101,
  },

  mainHeader: {
    height: 60,
    borderBottom: 'solid 1px #E3E1E1',
    contentPadding: '0 20px',
  },

  content: {
    padding: '0px',
  },

  menu: {
    mobileHoverBg: '#212B4F',
    collapseHoverBg: '#F8F8F8',
  },

  navLink: {
    bg: '#2C365A',
    hoverBg: '#424C70',
    activeBg: '#424C70',
    spanBg: '#424C70',
    color: '#FFFFFF',
    hoverColor: '#FFFFFF',
    activeColor: '#FFFFFF',
    spanColor: '#FFFFFF',
    activeBorderLeft: '3px solid #FFFFFF',
    activeBorderRight: 'none',
    borderBottom: '0px solid #252F54',
  },

  subLink: {
    menuBg: '#212B4F',
    bg: '#212B4F',
    hoverBg: '#212B4F',
    activeBg: '#212B4F',
    color: '#E5E4EA',
    hoverColor: '#FFC502',
    activeColor: '#FFC502',
    borderTop: '1px solid #252F54',
    leftPadBg: '#FFC502',
    leftPadWidth: 3,
  },
};

export const pageContainerClass = cssHash(
  (className) => `
    .${className} {
      height: 100%;
      width: 100%;
      position: relative;
      display: table;
      table-layout: fixed;
    }
    @media screen and (max-width: ${theme.mobileWidth}px) {
      .${className} {
        display: block;
        height: auto;
      }
    }
  `,
);

export const mainContainerClass = cssHash(
  (className) => `
    .${className} {
      background-color: ${theme.layout.bg};
      position: relative;
      display: table-cell;
      width: 100%;
      vertical-align: top;
    }
    @media screen and (max-width: ${theme.mobileWidth}px) {
      .${className} {
        display: block;
        height: auto;
      }
    }
  `,
);

export const pageSidebarClass = cssHash(
  (className) => `
    .${className} {
      background-color: ${theme.sidebar.bg};
      display: table-cell;
      height: 100%;
      position: relative;
      vertical-align: top;
      width: ${theme.sidebar.width}px;
      z-index: ${theme.sidebar.zIndex};
      -moz-box-shadow: ${theme.sidebar.boxShadow};
      -webkit-box-shadow: ${theme.sidebar.boxShadow};
      box-shadow: ${theme.sidebar.boxShadow};
    }
    @media screen and (max-width: ${theme.mobileWidth}px) {
      .${className} {
        display: block;
        width: 100%;
        height: auto;
      }
    }
  `,
);

export const siteHeaderClass = cssHash(
  (className) => `
    .${className} {
      background-color: ${theme.siteHeader.bg};
      color: ${theme.siteHeader.color};
      overflow: hidden;
      position: relative;
      z-index: ${theme.siteHeader.zIndex};
      display: flex;
      justify-content: space-between;
      border-bottom: ${theme.siteHeader.borderBottom};
      height: ${theme.siteHeader.height}px;
    }
    .${className}-mobile-menu {
      padding: 20px;
      cursor: pointer;
      display: none;
    }
    .${className}-content {
      padding: ${theme.siteHeader.contentPadding};
      display: flex;
      align-items: center;
      width: 100%;
    }
    @media screen and (max-width: ${theme.mobileWidth}px) {
      .${className}-mobile-menu {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .${className}-mobile-menu:hover {
        background-color: ${theme.menu.mobileHoverBg};
      }
    }
  `,
);

export const mainHeaderClass = cssHash(
  (className) => `
    .${className} {
      display: flex;
      justify-content: space-between;
      border-bottom: ${theme.mainHeader.borderBottom};
      height: ${theme.mainHeader.height}px;
    }
    .${className}-collapse-menu {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      cursor: pointer;
    }
    .${className}-collapse-menu:hover {
      background-color: ${theme.menu.collapseHoverBg};
    }
    .${className}-content {
      padding: ${theme.mainHeader.contentPadding};
    }
    @media screen and (max-width: ${theme.mobileWidth}px) {
      .${className}-collapse-menu {
        display: none;
      }
    }
  `,
);

export const mainContentClass = cssHash(
  (className) => `
    .${className} {
      padding: ${theme.content.padding};
    }
  `,
);

export const navigationClass = cssHash(
  (className) => `
    ul.${className} {
      font-size: 14px;
      list-style: outside none none;
      margin: 0 0 20px;
      padding: 0;
    }
    ul.${className} li {
      position: relative;
      cursor: pointer;
    }
    ul.${className} > li {
      border-bottom: ${theme.navLink.borderBottom};
    }
    ul.${className} li a {
      background-color: ${theme.navLink.bg};
      color: ${theme.navLink.color};
      display: flex;
      align-items: center;
      padding: 15px 20px;
      text-decoration: none;
      height: 15px;
    }
    ul.${className} li a span.title {
      flex: 1;
    }
    ul.${className} > li > a:hover,
    ul.${className} > li > a:focus {
      background-color: ${theme.navLink.hoverBg};
      color: ${theme.navLink.hoverColor};
    }
    ul.${className} > li.active > a {
      background-color: ${theme.navLink.activeBg};
      color: ${theme.navLink.color};
      border-left: ${theme.navLink.activeBorderLeft};
      border-right: ${theme.navLink.activeBorderRight};
    }
    ul.${className} > li:hover > a {
      color: ${theme.navLink.hoverColor};
    }
    ul.${className} ul > li > a:hover,
    ul.${className} ul > li > a:focus {
      background-color: ${theme.subLink.hoverBg};
      color: ${theme.subLink.hoverColor};
    }
    ul.${className} ul > li.active > a,
    ul.${className} ul > li.has-sub.active > a {
      background-color: ${theme.subLink.activeBg};
      color: ${theme.subLink.activeColor};
    }
    ul.${className} ul > li > a {
      background-color: ${theme.subLink.bg};
      color: ${theme.subLink.color};
      height: 15px;
    }
    ul.${className} li .menu-icon {
      margin-right: 16px;
      font-size: 15px;
    }
    ul.${className} li ul {
      list-style: outside none none;
      margin: 0;
      padding: 0;
      position: relative;
      z-index: 1;
      background-color: ${theme.subLink.menuBg};
      overflow: hidden;
    }
    ul.${className} li ul li {
      border-top: ${theme.subLink.borderTop};
    }
    ul.${className} > li > ul > li:before {
      background-color: transparent;
      content: "";
      font-weight: 400;
      height: 18px;
      left: 30px;
      position: absolute;
      top: 13px;
      width: ${theme.subLink.leftPadWidth}px;
      z-index: 2;
    }
    ul.${className} li ul li.active span.title {
      font-weight: 500;
    }
    ul.${className} li ul li:hover:before {
      background-color: ${theme.subLink.leftPadBg};
    }
    ul.${className} li ul li.active:before {
      background-color: ${theme.subLink.leftPadBg};
    }
    ul.${className} li ul li.has-sub:hover > a > .collapse-icon,
    ul.${className} li ul li.has-sub > a:focus:before {
      color: ${theme.subLink.hoverColor};
    }
    ul.${className} li ul li.active > a,
    ul.${className} li ul li.has-sub.active > a > .collapse-icon {
      color: ${theme.subLink.activeColor};
    }
    ul.${className} li ul > li > a {
      padding-left: 56px;
    }
    ul.${className} li ul > li > ul > li > a {
      padding-left: 76px;
    }
    ul.${className} li ul > li > ul > li > ul > li > a {
      padding-left: 96px;
    }
    ul.${className} li ul > li > ul > li > ul > li > ul > li > a {
      padding-left: 116px;
    }
    ul.${className} li.has-sub > a > .collapse-icon {
      color: ${theme.navLink.color};
      display: inline-flex;
      float: right;
      font-size: 15px;
      margin-left: 10px;
      position: relative;
      font-weight: normal;
    }
    ul.${className} li.active.has-sub > a > .collapse-icon {
      color: ${theme.navLink.activeColor};
    }
    ul.${className} li.has-sub > a > .collapse-icon:hover,
    ul.${className} > li > a > .collapse-icon:focus {
      color: ${theme.navLink.hoverColor};
    }
    @media screen and (max-width: ${theme.mobileWidth}px) {
      ul.${className} {
        margin-bottom: 0;
        border: 0 none;
        -moz-box-shadow: none;
        -webkit-box-shadow: none;
        box-shadow: none;
      }
    }
    
  `,
);

export const sidebarCollapsedClass = cssHash(
  (className) => `
    .${className} .${pageSidebarClass} {
      width: ${theme.sidebar.collapsedWidth}px;
    }
    .${className} .${siteHeaderClass}-content {
      display: none;
    }
    .${className} .${pageSidebarClass} ul.${navigationClass} li a {
      display: block;
    }
    .${className} .${pageSidebarClass} .${navigationClass} > li > a > span.title {
      background-color: ${theme.navLink.spanBg};
      color: ${theme.navLink.spanColor};
      display: block;
      left: ${theme.sidebar.collapsedWidth}px;
      zoom: 1;
      opacity: 0;
      filter: alpha(opacity=0);
      padding: 15px 20px;
      position: absolute;
      top: 0;
      z-index: 2;
      visibility: hidden;
      width: ${theme.sidebar.width - theme.sidebar.collapsedWidth - 20}px;
      -moz-box-shadow: 5px 0 5px -5px rgba(0, 0, 0, 0.25);
      -webkit-box-shadow: 5px 0 5px -5px rgba(0, 0, 0, 0.25);
      box-shadow: 5px 0 5px -5px rgba(0, 0, 0, 0.25);
      box-sizing: content-box;
      height: 15px;
    }
    .${className} .${pageSidebarClass} .${navigationClass} > li > a > span.label {
      left: 240px;
      zoom: 1;
      opacity: 0;
      filter: alpha(opacity=0);
      position: absolute;
      top: 15px;
      visibility: hidden;
    }
    .${className} .${pageSidebarClass} .${navigationClass} > li.has-sub:hover > a,
    .${className} .${pageSidebarClass} .${navigationClass} > li:hover > a {
      background-color: ${theme.navLink.spanBg};
      color: ${theme.navLink.spanColor};
    }
    .${className} .${pageSidebarClass} .${navigationClass} > li.has-sub:hover > a > span.title,
    .${className} .${pageSidebarClass} .${navigationClass} > li:hover > a > span.title,
    .${className} .${pageSidebarClass} .${navigationClass} > li:hover > a > span.label {
      visibility: visible;
      zoom: 1;
      opacity: 1;
      filter: alpha(opacity=100);
    }
    .${className} .${pageSidebarClass} .${navigationClass} > li > ul {
      display: block;
      height: 0;
      left: ${theme.sidebar.collapsedWidth}px;
      zoom: 1;
      opacity: 0;
      filter: alpha(opacity=0);
      position: absolute;
      top: auto;
      visibility: hidden;
      width: 240px;
    }
    .${className} .${pageSidebarClass} .${navigationClass} > li.has-sub:hover > ul,
    .${className} .${pageSidebarClass} .${navigationClass} > li:hover > ul {
      visibility: visible;
      zoom: 1;
      opacity: 1;
      filter: alpha(opacity=100);
      height: auto;
      -moz-box-shadow: 5px 5px 5px -5px rgba(0, 0, 0, 0.25);
      -webkit-box-shadow: 5px 5px 5px -5px rgba(0, 0, 0, 0.25);
      box-shadow: 5px 5px 5px -5px rgba(0, 0, 0, 0.25);
    }
    .${className} .${pageSidebarClass} ul.${navigationClass} > li > ul > li > a {
      padding-left: 20px;
    }
    .${className} .${pageSidebarClass} ul.${navigationClass} li ul > li > ul > li > a {
      padding-left: 40px;
    }
    .${className} .${pageSidebarClass} ul.${navigationClass} li ul > li > ul > li > ul > li > a {
      padding-left: 60px;
    }
    .${className} .${pageSidebarClass} ul.${navigationClass} li ul > li > ul > li > ul > li > ul > li > a {
      padding-left: 80px;
    }
    .${className} .${pageSidebarClass} ul.${navigationClass} > li.has-sub > a > .collapse-icon,
    .${className} .${pageSidebarClass} ul.${navigationClass} li ul li:before,
    .${className} .${pageSidebarClass} ul.${navigationClass} li ul li:after,
    .${className} .${pageSidebarClass} ul.${navigationClass} li ul:before {
      display: none;
    }
  `,
);
