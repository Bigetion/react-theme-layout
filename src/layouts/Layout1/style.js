import { cssHash } from 'css-hash';

export const mobileWidth = 767;

const mainContainerBgColor = '#FFFFFF';

const pageSidebarWidth = 280;
const pageSidebarBgColor = '#2C365A';
const pageSidebarZIndex = 101;
const pageSidebarCollapsedWidth = 60;

const siteHeaderHeight = 60;
const siteHeaderBgColor = '#2C365A';
const siteHeaderColor = '#FFFFFF';
const siteHeaderBorderBottom = '1px solid #252F54';
const siteHeaderContentPadding = '0 20px';
const siteHeaderZIndex = 101;

const mainHeaderHeight = 60;
const mainHeaderBorderBottom = 'solid 1px #E3E1E1';
const mainHeaderContentPadding = '0 20px';

const mainContentPadding = '0px';

const mobileMenuBgHover = '#212B4F';
const collapseMenuBgHover = '#F8F8F8';

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
      display: table-cell;
      height: 100%;
      position: relative;
      vertical-align: top;
      width: ${pageSidebarWidth}px;
      z-index: ${pageSidebarZIndex};
      -moz-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
      -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
    }
    .${pageContainerClass}-collapsed .${className} {
      width: ${pageSidebarCollapsedWidth}px;
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
      background-color: ${siteHeaderBgColor};
      color: ${siteHeaderColor};
      overflow: hidden;
      position: relative;
      z-index: ${siteHeaderZIndex};
      display: flex;
      justify-content: space-between;
      border-bottom: ${siteHeaderBorderBottom};
      height: ${siteHeaderHeight}px;
    }
    .${className}-mobile-menu {
      padding: 20px;
      cursor: pointer;
      display: none;
    }
    .${className}-content {
      padding: ${siteHeaderContentPadding};
      display: flex;
      align-items: center;
      width: 100%;
    }
    .${pageContainerClass}-collapsed .${className}-content {
      display: none;
    }
    @media screen and (max-width: ${mobileWidth}px) {
      .${className}-mobile-menu {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .${className}-mobile-menu:hover {
        background-color: ${mobileMenuBgHover};
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
    }
    .${className}-collapse-menu {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      cursor: pointer;
    }
    .${className}-collapse-menu:hover {
      background-color: ${collapseMenuBgHover};
    }
    .${className}-content {
      padding: ${mainHeaderContentPadding};
    }
    @media screen and (max-width: ${mobileWidth}px) {
      .${className}-collapse-menu {
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
