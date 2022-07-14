import { cssHash } from 'css-hash';

export const mobileWidth = 767;

const navbarHeight = 60;
const navbarBgColor = '#292961';
const navbarColor = '#FFFFFF';

const sidebarWidth = 220;
const sidebarCollapsedWidth = 60;
const sidebarBgColor = '#F0F0F0';
const sidebarColor = '#000000';

const sidebarToggleBtnHeight = 48;
const sidebarToggleBtnBgColor = '#F0F0F0';
const sidebarToggleBtnColor = '#666666';
const sidebarToggleBtnHoverBgColor = '#DBDBDB';
const sidebarToggleBtnHoverColor = '#666666';
const sidebarToggleBtnBorderTop = '1px solid #DBDBDB';

export const navbarClass = cssHash(
  (className) => `
    .${className} {
      padding: 0 16px;
      z-index: 1000;
      margin-bottom: 0;
      min-height: ${navbarHeight}px;
      border: 0;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      border-radius: 0;
      background-color: ${navbarBgColor};
      color: ${navbarColor};
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
      top: ${navbarHeight}px;
      background-color: ${sidebarBgColor};
      color: ${sidebarColor};
      transition: width 0.3s, left 0.3s;
      transform: translate3d(0, 0, 0);
    }
    .${className}.collapsed-desktop {
      width: ${sidebarCollapsedWidth}px;
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
    .${sidebarClass}.collapsed-desktop .${className} .collapse-icon {
      transform: rotate(180deg);
    }
    .${sidebarClass}.collapsed-desktop .${className} .collapse-text {
      display: none;
    }
  `,
);

export const layoutPageClass = cssHash(
  (className) => `
    .${className} {
      padding-left: ${sidebarWidth}px;
      transition: padding-left 0.3s;
    }
  `,
);

export const layoutContentClass = cssHash(
  (className) => `
    .${className} {
      width: 100%;
      padding-bottom: 100px;
      margin-top: ${navbarHeight}px;
      transition: padding 0.3s;
    }
  `,
);
