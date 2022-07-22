import { cssHash } from 'css-hash';

export const mobileWidth = 767;
export const tabletWidth = 1199;

const headerHeight = 48;
const headerBgColor = '#292961';
const headerColor = '#FFF';

const toggleBarBgColor = '#292961';
const toggleBarColor = '#FFF';
const toggleBarHoverBgColor = '#4B4B7E';
const toggleBarHoverColor = '#FFF';

const sidebarWidth = 256;
const sidebarCollapsedWidth = 56;
const sidebarBgColor = '#F0F0F0';
const sidebarColor = '#000';
const sidebarBorderRight = '1px solid #E9E9E9';

const menuItemBgColor = '#F0F0F0';
const menuItemColor = '#000';
const menuItemHoverBgColor = '#E5E5EA';
const menuItemHoverColor = '#000';
const menuItemActiveBgColor = '#E5E5EA';
const menuItemActiveColor = '#000';
const menuItemTooltipBgColor = '#000';
const menuItemTooltipColor = '#FFF';

const subItemContainerWidth = 200;
const subItemContainerBgColor = '#F5F5F5';
const subItemBgColor = '#F5F5F5';
const subItemColor = '#000';
const subItemHoverBgColor = '#E5E5EA';
const subItemHoverColor = '#000';
const subItemActiveBgColor = '#E5E5EA';
const subItemActiveColor = '#000';
const subItemHeaderBgColor = '#F0F0F0';
const subItemHeaderColor = '#000';

const sidebarToggleBtnHeight = 48;
const sidebarToggleBtnBgColor = '#F0F0F0';
const sidebarToggleBtnColor = '#666';
const sidebarToggleBtnHoverBgColor = '#E9E9E9';
const sidebarToggleBtnHoverColor = '#666';
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
    @media screen and (max-width: ${mobileWidth}px) {
      .${className} {
        padding: 0 5px;
      }
    }
  `,
);

export const headerContentClass = cssHash(
  (className) => `
    .${className} {
      width: 100%;
      display: flex;
      align-items: center;
      position: relative;
      min-height: ${headerHeight}px;
    }
  `,
);

export const brandLogoClass = cssHash(
  (className) => `
    .${className} {
      display: flex;
      align-items: center;
    }
  `,
);

export const toggleBarContainerClass = cssHash(
  (className) => `
    .${className} {
      display: none;
    }
    @media screen and (max-width: ${mobileWidth}px) {
      .${className} {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  `,
);

export const toggleBarClass = cssHash(
  (className) => `
    .${className} {
      display: flex;
      align-items: center;
      padding: 10px;
      margin-right: 10px;
      cursor: pointer;
      background-color: ${toggleBarBgColor};
      color: ${toggleBarColor};
      border-radius: 5px;
    }
    .${className}:hover {
      background-color: ${toggleBarHoverBgColor};
      color: ${toggleBarHoverColor};
    }
  `,
);

export const layoutPageClass = cssHash(
  (className) => `
    .${className} {
      padding-left: ${sidebarWidth}px;
      transition: padding-left 0.3s;
    }
    @media screen and (max-width: ${tabletWidth}px) {
      .${className} {
        padding-left: ${sidebarCollapsedWidth}px;
      }
    }
    @media screen and (max-width: ${mobileWidth}px) {
      .${className} {
        padding-left: 0;
      }
    }
  `,
);

export const layoutPageCollapsedClass = cssHash(
  (className) => `
    .${layoutPageClass}.${className} {
      padding-left: ${sidebarCollapsedWidth}px;
    }
  `,
);

export const layoutPageExpandedClass = cssHash(
  (className) => `
    .${layoutPageClass}.${className} {
      padding-left: 0;
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
    .${layoutPageCollapsedClass} .${className} {
      width: ${sidebarCollapsedWidth}px;
    }
    @media screen and (max-width: ${mobileWidth}px) {
      .${className} {
        left: -${sidebarWidth}px;
      }
      .${layoutPageExpandedClass} .${className} {
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
      width: 100%;
      padding: 0;
      float: left;
      list-style: none;
      margin-bottom: ${sidebarToggleBtnHeight}px;
      margin-top: 0.25rem;
    }
    .${className} * {
      -ms-box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
    .${className} li {
      float: left;
      width: 100%;
      margin-bottom: 1px;
      position: relative;
      cursor: pointer;
      white-space: nowrap;
    }
    .${className} li a {
      text-decoration: none;
    }
    .${className} li > a {
      padding: 0.5rem 0.75rem;
      display: flex;
      align-items: center;
      border-radius: 0.25rem;
      width: auto;
      line-height: 1rem;
      transition: none;
      margin: 1px 4px;
      font-size: 0.875rem;
      background-color: ${menuItemBgColor};
      color: ${menuItemColor};
    }
    .${className} li > a:hover {
      background-color: ${menuItemHoverBgColor};
      color: ${menuItemHoverColor};
    }
    .${className} li.active > a {
      font-weight: 600;
    }
    .${layoutPageCollapsedClass} .${className} li.active > a {
      background-color: ${menuItemActiveBgColor};
      color: ${menuItemActiveColor};
    }
    .${className} li .nav-item-icon {
      display: flex;
      align-items: center;
      margin-right: 8px;
      width: 16px;
    }
    .${layoutPageCollapsedClass} .${className} li .nav-item-icon {
      margin-right: 0;
    }
    .${className} li .nav-item-name {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .${layoutPageCollapsedClass} .${className} li .nav-item-name {
      opacity: 0;
    }
    .${className} li .popup-menu {
      padding-left: 0.5rem;
      display: inline-block;
      width: ${subItemContainerWidth}px;
    }
    .${className} li .popup-menu li .popup-header {
      margin-top: -0.25rem;
      margin-left: -0.1rem;
      margin-bottom: 0.2rem;
      width: calc(100% + 0.2rem);
      padding: 0.5rem 1rem;
      cursor: default;
      pointer-events: none;
      font-size: 0.75rem;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      font-weight: 600;
      background-color: ${subItemHeaderBgColor};
      color: ${subItemHeaderColor};
    }
    .${className} li .popup-menu.popup-tooltip ul {
      padding-bottom: 0;
    }
    .${className} li .popup-menu.popup-tooltip ul li,
    .${className} li .popup-menu.popup-tooltip .popup-header {
      margin-bottom: 0;
      background-color: ${menuItemTooltipBgColor};
      color: ${menuItemTooltipColor};
    }
    .${className} li .popup-menu.popup-tooltip .tooltip-triangle {
      position: absolute;
      content: '';
      display: block;
      top: 50%;
      left: 0.25rem;
      margin-top: -0.25rem;
      width: 0;
      height: 0;
      border-top: 0.25rem solid transparent;
      border-bottom: 0.25rem solid transparent;
      border-right: 0.25rem solid ${menuItemTooltipBgColor};
      border-right-color: var(--black, ${menuItemTooltipBgColor});
    }
    .${className} li ul {
      width: 100%;
      list-style: none;
      overflow: hidden;
      margin: 0;
      padding: 0.25rem 0.1rem;
      background-color: ${subItemContainerBgColor};
      box-shadow: 0 0.25rem 1rem rgb(0 0 0 / 24%), 0 0 0.125rem rgb(0 0 0 / 24%);
      border-style: none;
      border-radius: 4px;
    }
    .${className} li.active .sub-menu ul {
      background-color: ${sidebarBgColor};
      box-shadow: none;
    }
    .${className} li ul li > a {
      background-color: ${subItemBgColor};
      color: ${subItemColor};
    }
    .${className} li ul li > a:hover,
    .${className} li.active .sub-menu ul li > a:hover {
      background-color: ${subItemHoverBgColor};
      color: ${subItemHoverColor};
    }
    .${className} li.active .sub-menu ul li > a {
      background-color: ${sidebarBgColor};
      padding-left: 2.25rem;
    }
    .${className} li ul li.active > a {
      background-color: ${subItemActiveBgColor};
      color: ${subItemActiveColor};
      font-weight: 600;
    }
  `,
);

export const collapseBtnClass = cssHash(
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
    .${className}:hover {
      background-color: ${sidebarToggleBtnHoverBgColor};
      color: ${sidebarToggleBtnHoverColor};
    }
  `,
);

export const collapseIconClass = cssHash(
  (className) => `
    .${className} {
      display: flex;
      align-items: center;
      margin-left: 16px;
    }
    .${layoutPageCollapsedClass} .${className} {
      transform: rotate(180deg);
    }
  `,
);

export const collapseLabelClass = cssHash(
  (className) => `
    .${className} {
      margin-left: 10px;
      white-space: nowrap;
      font-size: 12px;
    }
    .${layoutPageCollapsedClass} .${className} {
      display: none;
    }
    @media screen and (max-width: ${mobileWidth}px) {
      .${className} {
        display: none;
      }
      .${layoutPageExpandedClass} .${className} {
        display: block;
      }
    }
  `,
);

export const menuOverlayClass = cssHash(
  (className) => `
    .${className} {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #000;
      z-index: 500;
      transition: all 0.3s;
      visibility: hidden;
      opacity: 0;
    }
  `,
);

export const menuOverlayExpandedClass = cssHash(
  (className) => `
    .${menuOverlayClass}.${className} {
      visibility: visible;
      opacity: 0.4;
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
