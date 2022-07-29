import { cssHash } from 'css-hash';

export const mobileWidth = 767;

const mainContainerBgColor = 'transparent';

const pageSidebarWidth = 290;
const pageSidebarBgColor = 'rgba(255, 255, 255, 0.2)';
const pageSidebarColor = '#342C56';
const pageSidebarZIndex = 101;
const pageSidebarCollapsedWidth = 120;

const siteHeaderHeight = 100;
const siteHeaderBgColor = 'transparent';
const siteHeaderColor = '#342C56';
const siteHeaderBorderBottom = 'none';
const siteHeaderContentPadding = '0 20px';
const siteHeaderZIndex = 101;

const mainHeaderHeight = 60;
const mainHeaderBgColor = 'transparent';
const mainHeaderColor = '#000000';
const mainHeaderBorderBottom = 'none';
const mainHeaderContentPadding = '0 20px 0 20px';

const mainContentPadding = '0px';

const mobileMenuBgHover = 'rgba(255, 255, 255, 0.1)';
const mobileMenuHoverColor = 'inherit';
const collapseMenuBg = 'rgba(0, 0, 0, 0.04)';
const collapseMenuBgHover = 'rgba(0, 0, 0, 0.1)';

const linkBgColor = 'transparent';
const linkColor = '#342C56';

const linkHoverBgColor = '#FFFFFF';
const linkHoverColor = '#342C56';

const linkActiveBgColor = '#FFFFFF';
const linkActiveColor = '#342C56';

const linkSpanBgColor = '#FFFFFF';
const linkSpanColor = '#342C56';

const subLinkBgColor = 'transparent';
const subLinkColor = '#342C56';

const subLinkHoverBgColor = '#FFFFFF';
const subLinkHoverColor = '#342C56';

const subLinkActiveBgColor = '#FFFFFF';
const subLinkActiveColor = '#342C56';

export const gradientBackgroundClass = cssHash(
  (className) => `
    .${className} {
      position: fixed;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgb(225,232,242);
      background: linear-gradient(349deg, rgba(225,232,242,1) 0%, rgba(252,226,224,1) 50%, rgba(216,210,252,1) 100%);
    }
  `,
);

export const pageContainerClass = cssHash(
  (className) => `
    .${className} {
      height: 100%;
      width: 100%;
      position: relative;
      display: table;
      table-layout: fixed;
    }
    @media screen and (max-width: ${mobileWidth}px) {
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
      background-color: ${mainContainerBgColor};
      position: relative;
      display: table-cell;
      width: 100%;
      vertical-align: top;
    }
    @media screen and (max-width: ${mobileWidth}px) {
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
      background-color: ${pageSidebarBgColor};
      color: ${pageSidebarColor};
      display: table-cell;
      height: 100%;
      position: relative;
      vertical-align: top;
      width: ${pageSidebarWidth}px;
      z-index: ${pageSidebarZIndex};
    }
    @media screen and (max-width: ${mobileWidth}px) {
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
      overflow: hidden;
      position: relative;
      z-index: ${siteHeaderZIndex};
      display: flex;
      justify-content: space-between;
      border-bottom: ${siteHeaderBorderBottom};
      height: ${siteHeaderHeight}px;
      background-color: ${siteHeaderBgColor};
      color: ${siteHeaderColor};
    }
    @media screen and (max-width: ${mobileWidth}px) {
      .${className} {
        height: ${mainHeaderHeight}px;
      }
    }
  `,
);

export const siteHeaderContentClass = cssHash(
  (className) => `
    .${className} {
      width: 100%;
      padding: ${siteHeaderContentPadding};
      display: flex;
      align-items: center;
    }
  `,
);

export const mobileMenuClass = cssHash(
  (className) => `
    .${className} {
      padding: 20px;
      cursor: pointer;
      display: none;
    }
    @media screen and (max-width: ${mobileWidth}px) {
      .${className} {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .${className}:hover {
        background-color: ${mobileMenuBgHover};
        color: ${mobileMenuHoverColor};
      }
    }
  `,
);

export const mainHeaderClass = cssHash(
  (className) => `
    .${className} {
      display: flex;
      justify-content: space-between;
      border-bottom: ${mainHeaderBorderBottom};
      height: ${mainHeaderHeight}px;
      background-color: ${mainHeaderBgColor};
      color: ${mainHeaderColor};
    }
  `,
);

export const mainHeaderContentClass = cssHash(
  (className) => `
    .${className} {
      width: 100%;
      padding: ${mainHeaderContentPadding};
      display: flex;
      align-items: center;
    }
  `,
);

export const collapseMenuClass = cssHash(
  (className) => `
    .${className} {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      cursor: pointer;
      border-radius: 50%;
      position: absolute;
      left: -25px;
      top: 25px;
      z-index: 102;
      background-color: ${collapseMenuBg};
    }
    .${className}:hover {
      background-color: ${collapseMenuBgHover};
    }
    @media screen and (max-width: ${mobileWidth}px) {
      .${className} {
        display: none;
      }
    }
  `,
);

export const mainContentClass = cssHash(
  (className) => `
    .${className} {
      padding: ${mainContentPadding};
    }
  `,
);

export const navigationClass = cssHash(
  (className) => `
    .${className} {
      margin: 0;
      padding: 10px 30px;
      list-style: none;
      position: relative;
    }
    .${className} * {
      -ms-box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
    .${className} li {
      position: relative;
    }
    .${className} li + li {
      margin-top: 4px;
    }
    .${className} li + .navigation-header {
      margin-top: 10px;
    }
    .${className} li a {
      background-color: ${linkBgColor};
      color: ${linkColor};
      display: block;
      text-decoration: none;
      cursor: pointer;
      font-size: 14px;
      border-radius: 6px;
    }
    .${className} li a:focus,
    .${className} li a:hover {
      background-color: ${linkHoverBgColor};
      color: ${linkHoverColor};
      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
    }
    .${className} li a > .menu-icon,
    .${className} li a > .navigation-title .menu-icon {
      float: left;
      top: 0;
      margin-right: 15px;
    }
    .${className} li a > .navigation-title .menu-icon {
      display: none;
    }
    .${className} li.disabled > a,
    .${className} li.disabled > a:focus,
    .${className} li.disabled > a:hover {
      color: inherit;
      background-color: transparent;
      cursor: not-allowed;
      opacity: 0.3;
      filter: alpha(opacity=30);
    }
    .${className} li > .has-sub {
      position: relative;
      padding-right: 36px;
    }
    .${className} li > .has-sub > .collapse-icon {
      font-size: 16px;
      display: block;
      position: absolute;
      top: 50%;
      margin-top: -9px;
      right: 20px;
      line-height: 1;
    }
    .${className} li.navigation-divider {
      margin: 10px 0;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.1);
    }
    .${className} > li > a {
      padding: 10px 20px;
      height: 40px;
      font-weight: 500;
    }
    .${className} > li.active > a,
    .${className} > li.active > a:focus,
    .${className} > li.active > a:hover {
      background-color: ${linkActiveBgColor};
      color: ${linkActiveColor};
      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
    }
    .${className} > li.active > a > [class*='text-'] {
      color: ${linkActiveColor};
    }
    .${className} > li ul {
      list-style: none;
      margin: 0;
      padding: 0px;
      background-color: ${subLinkBgColor};
      color: ${subLinkColor};
      border-radius: 6px;
      margin-top: 4px;
    }
    .${className} > li ul li a {
      padding: 10px 20px 10px 51px;
      height: 40px;
    }
    .${className} > li ul .navigation-header {
      padding-left: 51px;
    }
    .${className} > li > ul > li > ul > .navigation-header,
    .${className} > li > ul > li > ul > li > a {
      padding-left: 71px;
    }
    .${className} > li > ul > li > ul > li > ul .navigation-header,
    .${className} > li > ul > li > ul > li > ul > li > a {
      padding-left: 91px;
    }
    .${className} > li > ul li:first-child {
      padding-top: 0px;
    }
    .${className} > li > ul li:last-child {
      padding-bottom: 0px;
    }
    .${className} > li > ul li > a:hover {
      background-color: ${subLinkHoverBgColor};
      color: ${subLinkHoverColor};
    }
    .${className} > li > ul li.active > a,
    .${className} > li > ul li.active > a:focus,
    .${className} > li > ul li.active > a:hover {
      background-color: ${subLinkActiveBgColor};
      color: ${subLinkActiveColor};
      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
    }
    .${className} .navigation-header {
      height: 30px;
      padding: 10px 20px;
      border-bottom: 0;
      text-transform: uppercase;
      font-size: 11px;
      line-height: 1.82;
    }
    .${className} .navigation-header > .navigation-title {
      display: block;
      margin-top: 2px;
    }
    .${className} .navigation-header > .header-icon {
      display: none;
    }
    .${className} .navigation-header,
    .${className} .navigation-header a {
      color: rgba(255, 255, 255, 0.5);
      font-weight: 400;
    }
    .${className} .navigation-header a:focus,
    .${className} .navigation-header a:hover {
      color: #fff;
    }
    .${className} .navigation-header a .header-icon {
      float: none;
      margin: 0;
    }
    .${className}-lg > li > a,
    .${className}-lg > li > a > .navigation-title {
      padding-top: 14px;
      padding-bottom: 14px;
      height: 48px;
    }
    .${className}-lg > li ul li a,
    .${className}-sm > li > a,
    .${className}-sm > li > a > .navigation-title {
      padding-top: 10px;
      padding-bottom: 10px;
      height: 40px;
    }
    .${className}-sm > li ul li a {
      padding-top: 6px;
      padding-bottom: 6px;
      height: 32px;
    }
    .${className}-xs > li > a,
    .${className}-xs > li > a > .navigation-title {
      padding-top: 8px;
      padding-bottom: 8px;
      height: 36px;
    }
    .${className}-xs > li ul li a {
      padding-top: 6px;
      padding-bottom: 6px;
      height: 32px;
    }
  `,
);

export const navigationCollapsedClass = cssHash(
  (className) => `
    .${className} .${pageSidebarClass} {
      width: ${pageSidebarCollapsedWidth}px;
    }
    .${className} .${siteHeaderContentClass} {
      display: none;
    }
    .${className} .${navigationClass} > li > a {
      display: block;
      text-align: center;
      padding-left: 0;
      padding-right: 0;
      border-radius: 0;
      border-radius: 6px;
    }
    .${className} .${navigationClass} > li > a:hover {
      border-bottom-right-radius: 0px;
      border-top-right-radius: 0px;
    }
    .${className} .${navigationClass} > li > a > .navigation-title {
      display: none;
      position: absolute;
      top: 0;
      right: -${pageSidebarWidth - 61}px;
      background-color: ${linkSpanBgColor};
      padding: 10px 20px;
      width: ${pageSidebarWidth}px;
      text-align: left;
      color: ${linkSpanColor};
      cursor: pointer;
      border-radius: 6px;
      height: 40px;
      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
    }
    .${className} .${navigationClass} > li > a.has-sub > .navigation-title {
      border-bottom-right-radius: 0px;
    }
    .${className} .${navigationClass} > li > a > .menu-icon {
      margin: 0;
      float: none;
    }
    .${className} .${navigationClass} li a > .navigation-title .menu-icon {
      display: block;
    }
    .${className} .${navigationClass} > li:hover > ul {
      display: block !important;
    }
    .${className} .${navigationClass} > li:hover > a > .navigation-title {
      display: block;
    }
    .${className} .${navigationClass} > li:hover > a {
      background-color: ${linkHoverBgColor};
      color: ${linkHoverColor};
      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
    }
    .${className} .${navigationClass} > li ul {
      margin-top: 0px;
    }
    .${className} .${navigationClass} > li > ul {
      position: absolute;
      right: -${pageSidebarWidth - 61}px;
      top: 40px;
      width: ${pageSidebarWidth - 66}px;
      display: none;
      background-color: ${subLinkBgColor};
      border-right: 1px solid rgba(0, 0, 0, 0.05);
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      border-left: 1px solid rgba(0, 0, 0, 0.05);
      border-radius: 0 0 6px 6px;
      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
      padding: 0px 4px 4px;
    }
    .${className} .${navigationClass} > li > ul li:first-child {
      padding-top: 4px;
    }
    .${className} .${navigationClass} > li > ul > li > a {
      padding-left: 20px;
      padding-right: 20px;
    }
    .${className} .${navigationClass} > li > ul > li > ul > li > a {
      padding-left: 30px;
    }
    .${className} .${navigationClass} > li > ul > li > ul > li > ul > li > a {
      padding-left: 60px;
    }
    .${className} .${navigationClass} > .navigation-header {
      padding: 0;
      text-align: center;
    }
    .${className} .${navigationClass} > .navigation-header > .header-icon {
      display: block;
      top: 0;
      padding: 13px 0;
    }
    .${className} .${navigationClass} > .navigation-header > .navigation-title {
      display: none;
    }
    
    @media (min-width: ${mobileWidth}px) {
      .${className} .${navigationClass}-lg > li > ul {
        top: 48px;
      }
      .${className} .${navigationClass}-sm > li > ul {
        top: 40px;
      }
      .${className} .${navigationClass}-xs > li > ul {
        top: 36px;
      }
    }
  `,
);
