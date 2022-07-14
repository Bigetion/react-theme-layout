import { cssHash } from 'css-hash';

export const mobileWidth = 767;
export const tabletWidth = 1199;

const headerHeight = 48;
const headerBgColor = '#292961';
const headerColor = '#FFFFFF';

const toggleBarBgColor = '#292961';
const toggleBarColor = '#FFFFFF';
const toggleBarHoverBgColor = '#4B4B7E';
const toggleBarHoverColor = '#FFFFFF';

const sidebarWidth = 256;
const sidebarCollapsedWidth = 56;
const sidebarBgColor = '#F0F0F0';
const sidebarColor = '#000000';
const sidebarBorderRight = '1px solid #E9E9E9';

const sidebarToggleBtnHeight = 48;
const sidebarToggleBtnBgColor = '#F0F0F0';
const sidebarToggleBtnColor = '#666666';
const sidebarToggleBtnHoverBgColor = '#E9E9E9';
const sidebarToggleBtnHoverColor = '#666666';
const sidebarToggleBtnBorderTop = '1px solid #E9E9E9';

export const headerClass = cssHash(
  (className) => `
    .${className} {
      padding: 0 16px;
      z-index: 1000;
      margin-bottom: 0;
      min-height: ${headerHeight}px;
      border: 0;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      border-radius: 0;
      background-color: ${headerBgColor};
      color: ${headerColor};
    }
    .${className} .header-content {
      width: 100%;
      display: flex;
      align-items: center;
      position: relative;
      min-height: ${headerHeight}px;
    }
    .${className} .mobile-menu {
      display: none;
    }
    .${className} .mobile-menu .toggle-bar {
      display: flex;
      align-items: center;
      padding: 10px;
      margin-right: 10px;
      cursor: pointer;
      background-color: ${toggleBarBgColor};
      color: ${toggleBarColor};
      border-radius: 5px;
    }
    .${className} .mobile-menu .toggle-bar:hover {
      background-color: ${toggleBarHoverBgColor};
      color: ${toggleBarHoverColor};
    }
    @media screen and (max-width: ${mobileWidth}px) {
      .${className} {
        padding: 0 5px;
      }
      .${className} .mobile-menu {
        display: block;
      }
    }
  `,
);

export const layoutPageClass = cssHash(
  (className) => `
    .${className} {
      padding-left: ${sidebarWidth}px;
      transition: padding-left 0.3s;
    }
    .${className}.collapsed {
      padding-left: ${sidebarCollapsedWidth}px;
    }
    .${className} .mobile-menu-overlay {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #000000;
      visibility: hidden;
      opacity: 0;
      z-index: 500;
      transition: all 0.3s;
    }
    @media screen and (max-width: ${tabletWidth}px) {
      .${className} {
        padding-left: ${sidebarCollapsedWidth}px;
      }
    }
    @media screen and (max-width: ${mobileWidth}px) {
      .${className} {
        padding-left: 0px;
      }
      .${className}.expanded-menu .mobile-menu-overlay {
        visibility: visible;
        opacity: 0.4;
      }
    }
  `,
);

export const sidebarClass = cssHash(
  (className) => `
    .${className} {
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 600;
      width: ${sidebarWidth}px;
      top: ${headerHeight}px;
      background-color: ${sidebarBgColor};
      color: ${sidebarColor};
      transition: width 0.3s, left 0.3s;
      transform: translate3d(0, 0, 0);
      border-right: ${sidebarBorderRight};
    }
    .${layoutPageClass}.collapsed .${className} {
      width: ${sidebarCollapsedWidth}px;
    }
    @media screen and (max-width: ${mobileWidth}px) {
      .${className} {
        left: -${sidebarWidth}px;
      }
      .${layoutPageClass}.expanded-menu .${className} {
        left: 0;
      }
    }
  `,
);

export const sidebarInnerClass = cssHash(
  (className) => `
    .${className} {
      height: 100%;
      width: 100%;
      overflow-x: hidden;
      overflow-y: auto;
    }
  `,
);

export const sidebarNavigationClass = cssHash(
  (className) => `
    .${className} {
      position: relative;
      margin-bottom: ${sidebarToggleBtnHeight}px;
    }
  `,
);

export const sidebarToggleBtnClass = cssHash(
  (className) => `
    .${className} {
      transition: width 0.3s;
      height: ${sidebarToggleBtnHeight}px;
      background-color: ${sidebarToggleBtnBgColor};
      color: ${sidebarToggleBtnColor};
      border-top: ${sidebarToggleBtnBorderTop};
      display: flex;
      align-items: center;
      position: absolute;
      bottom: 0;
      width: 100%;
      cursor: pointer;
    }
    .${className} .collapse-icon {
      display: flex;
      align-items: center;
      margin-left: 16px;
    }
    .${className} .collapse-text {
      margin-left: 10px;
      white-space: nowrap;
      font-size: 12px;
    }
    .${className}:hover {
      background-color: ${sidebarToggleBtnHoverBgColor};
      color: ${sidebarToggleBtnHoverColor};
    }
    .${layoutPageClass}.collapsed .${sidebarClass} .${className} .collapse-icon {
      transform: rotate(180deg);
    }
    .${layoutPageClass}.collapsed .${sidebarClass} .${className} .collapse-text {
      display: none;
    }
    @media screen and (max-width: ${mobileWidth}px) {
      .${className} .collapse-text {
        display: none;
      }
      .${layoutPageClass}.expanded-menu .${className} .collapse-text {
        display: block;
      }
    }
  `,
);

export const layoutContentClass = cssHash(
  (className) => `
    .${className} {
      width: 100%;
      padding-bottom: 100px;
      margin-top: ${headerHeight}px;
      transition: padding 0.3s;
    }
  `,
);
