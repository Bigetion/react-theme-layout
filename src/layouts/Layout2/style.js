import { cssHash } from 'css-hash';

export const mobileWidth = 767;

const pageSidebarWidth = 280;
const pageSidebarMinimizedWidth = 60;

const pageHeaderHeight = 55;
const pageHeaderBg = '#FFFFFF';
const pageHeaderColor = '#263C46';
const pageHeaderZIndex = 5;

const pageHeaderLogoBg = '#364760';
const pageHeaderLogoColor = '#FFFFFF';

const pageHeaderCollapsedMenuBg = '#FFFFFF';
const pageHeaderCollapsedMenuBgHover = '#FAFAFA';
const pageHeaderCollapsedMenuColor = '#000000';
const pageHeaderMobileMenuBg = '#364760';
const pageHeaderMobileMenuBgHover = '#324259';
const pageHeaderMobileMenuColor = '#F0F4F6';

const pageContainerZIndex = 4;

const pageSidebarBg = '#304056';
const pageSidebarColor = '#F0F4F6';
const pageSidebarZIndex = 3;

const pageContentZIndex = 2;

export const layoutClass = cssHash(
  (className) => `
    .${className} {
      width: 100%;
      height: 100%;
      min-height: 100%;
      float: left;
      position: relative;
      visibility: visible !important;
      overflow-x: hidden;
    }
  `,
);

export const pageHeaderClass = cssHash(
  (className) => `
    .${layoutClass} .${className} {
      width: 100%;
      height: ${pageHeaderHeight}px;
      background: ${pageHeaderBg};
      color: ${pageHeaderColor};
      position: absolute;
      left: 0px;
      top: 0px;
      z-index: ${pageHeaderZIndex};
      -moz-box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
      -webkit-box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    }
    @media all and (max-width: ${mobileWidth}px) {
      .${layoutClass} .${className} {
        height: auto;
        position: relative;
        float: left;
      }
    }  
  `,
);

export const pageHeaderMenuClass = cssHash(
  (className) => `
    .${layoutClass} .${className} {
      float: left;
      padding: 0px;
      margin: 0px;
      list-style: none;
      margin-right: 10px;
    }
    .${layoutClass} .${className}.pull-right {
      float: right;
    }
    .${layoutClass} .${className} > li {
      height: ${pageHeaderHeight}px;
      display: block;
      float: left;
      position: relative;
    }
    .${layoutClass} .${className} > li > span {
      display: block;
      line-height: ${pageHeaderHeight}px;
      padding: 0px 10px;
      text-align: center;
    }
  `,
);

export const pageHeaderLogoClass = cssHash(
  (className) => `
    .${layoutClass} .${pageHeaderClass} .${className} {
      float: left;
      width: ${pageSidebarWidth}px;
      height: ${pageHeaderHeight}px;
      line-height: ${pageHeaderHeight}px;
      background: ${pageHeaderLogoBg};
      color: ${pageHeaderLogoColor};
      text-align: center;
      position: relative;
      margin-right: 55px;
    }
    .${layoutClass} .${pageHeaderClass} .${className} a {
      width: 100%;
      display: block;
      height: ${pageHeaderHeight}px;
      overflow: hidden;
      color: ${pageHeaderLogoColor};
    }
    .${layoutClass} .${pageHeaderClass} .${className} .${className}-collapse-menu {
      position: absolute;
      top: 0px;
      background: ${pageHeaderCollapsedMenuBg};
      color: ${pageHeaderCollapsedMenuColor};
      height: ${pageHeaderHeight}px;
      width: ${pageHeaderHeight}px;
      text-decoration: none;
      right: -${pageHeaderHeight}px;
      cursor: pointer;
    }
    .${layoutClass} .${pageHeaderClass} .${className} .${className}-collapse-menu:hover {
      background: ${pageHeaderCollapsedMenuBgHover};
    }
    @media all and (max-width: ${mobileWidth}px) {
      .${layoutClass} .${pageHeaderClass} {
        height: auto;
        position: relative;
        float: left;
      }
      .${layoutClass} .${pageHeaderClass} .${className} {
        width: 100%;
        margin-right: 0px;
        -moz-box-shadow: none;
        -webkit-box-shadow: none;
        box-shadow: none;
      }
      .${layoutClass} .${pageHeaderClass} .${className} .${className}-collapse-menu {
        right: 0px;
        background: ${pageHeaderMobileMenuBg};
        color: ${pageHeaderMobileMenuColor};
      }
      .${layoutClass} .${pageHeaderClass} .${className} .${className}-collapse-menu:hover {
        background: ${pageHeaderMobileMenuBgHover};
      }
    }  
  `,
);

export const pageContainerClass = cssHash(
  (className) => `
    .${layoutClass} .${className} {
      position: relative;
      z-index: ${pageContainerZIndex};
      float: left;
      width: 100%;
      height: calc(100% - ${pageHeaderHeight}px);
      min-height: calc(100% - ${pageHeaderHeight}px);
      padding-top: ${pageHeaderHeight}px;
      box-sizing: content-box;
    }
    @media all and (max-width: ${mobileWidth}px) {
      .${layoutClass} .${className} {
        float: left;
        width: 100%;
        padding-top: 0px;
        height: auto;
      }
    }
  `,
);

export const pageSidebarClass = cssHash(
  (className) => `
    .${layoutClass} .${pageContainerClass} .${className} {
      position: absolute;
      z-index: ${pageSidebarZIndex};
      height: auto;
      min-height: calc(100% - ${pageHeaderHeight}px);
      width: ${pageSidebarWidth}px;
      background: ${pageSidebarBg};
      color: ${pageSidebarColor};
    }
    @media all and (max-width: ${mobileWidth}px) {
      .${layoutClass} .${pageContainerClass} .${className} {
        position: relative;
        float: left;
        width: 100%;
        height: auto;
        padding-bottom: 0px;
      }
    }
  `,
);

export const pageSidebarMinimizedClass = cssHash(
  (className) => `
    .${layoutClass}.${className} .${pageContainerClass} .${pageSidebarClass} {
      width: ${pageSidebarMinimizedWidth}px;
    }
  `,
);

export const pageSidebarCollapsedClass = cssHash(
  (className) => `
    .${layoutClass}.${className} .${pageContainerClass} .${pageSidebarClass} {
      width: 0px;
      overflow: hidden;
    }
  `,
);

export const pageContentClass = cssHash(
  (className) => `
    .${layoutClass} .${pageContainerClass} .${className} {
      position: relative;
      z-index: ${pageContentZIndex};
      width: calc(100% - ${pageSidebarWidth}px);
      height: 100%;
      min-height: 100%;
      padding-left: ${pageSidebarWidth}px;
      box-sizing: content-box;
    }
    .${layoutClass}.${pageSidebarMinimizedClass} .${pageContainerClass} .${className} {
      padding-left: ${pageSidebarMinimizedWidth}px;
      width: calc(100% - ${pageSidebarMinimizedWidth}px);
    }
    .${layoutClass}.${pageSidebarCollapsedClass} .${pageContainerClass} .${className} {
      width: 100%;
      padding-left: 0px;
    }
    @media all and (max-width: ${mobileWidth}px) {
      .${layoutClass} .${pageContainerClass} .${className} {
        width: 100%;
        padding: 0px;
        float: left;
      }
    }
  `,
);
