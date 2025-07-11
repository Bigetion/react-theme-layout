import { cssHash } from 'css-hash';

export const mobileWidth = 767;

const headerHeight = 64;
const pageHeaderBgColor = '#FAFBFC';

const sidebarWidth = 280;
const sidebarMiniWidth = 60;
const sidebarBgColor = '#1F2937';
const sidebarHeaderBgColor = '#232E3E';
const sidebarHeaderColor = '#FFFFFF';

const collapseButtonBgColor = '#EBEEF2';
const collapseButtonHoverBgColor = '#D4D6DA';
const collapseButtonColor = '#000000';
const collapseButtonHoverColor = '#000000';

const sidebarCloseButtonBgColor = '#283547';
const sidebarCloseButtonHoverBgColor = '#161D27';
const sidebarCloseButtonColor = '#FFFFFF';
const sidebarCloseButtonHoverColor = '#FFFFFF';

const mainContainerBgColor = '#FFFFFF';

const linkBgColor = '#1F2937';
const linkHoverBgColor = '#19212C';
const linkActiveBgColor = '#19212C';

const linkColor = '#90A0B7';
const linkHoverColor = '#FFFFFF';
const linkActiveColor = '#FFFFFF';

const subLinkMenuBgColor = '#1C2531';
const subLinkBgColor = '#1C2531';
const subLinkHoverBgColor = '#1C2531';
const subLinkActiveBgColor = '#1C2531';

const subLinkColor = '#90A0B7';
const subLinkHoverColor = '#FFFFFF';
const subLinkActiveColor = '#FFFFFF';

const linkActiveBorderLeft = '0px solid #FFFFFF';
const linkActiveBorderRight = 'none';
const linkBorderBottom = '0px solid #1F2937';
const subLinkItemBorderTop = '0px solid #1F2937';
const subLinkLeftPadBgColor = '#FFFFFF';
const subLinkLeftPadWidth = 0;

export const pageContainerClass = cssHash(
  (className) => `
    .${className} {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      max-width: 100%;
      min-height: 100vh;
    }
    @media screen and (min-width: ${mobileWidth}px) {
      .${className} {
        padding-left: ${sidebarWidth}px;
      }
      .${className}-sidebar-mini {
        padding-left: ${sidebarMiniWidth}px;
      }
    }
  `,
);

export const pageHeaderClass = cssHash(
  (className) => `
    .${className} {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 1030;
      max-width: 100%;
      width: auto;
    }
    @media screen and (min-width: ${mobileWidth}px) {
      .${className} {
        padding-left: ${sidebarWidth}px;
      }
      .${pageContainerClass}-sidebar-mini .${className} {
        padding-left: ${sidebarMiniWidth}px;
      }
    }
  `,
);

export const sidebarClass = cssHash(
  (className) => `
    .${className} {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 1032;
      width: 100%;
      height: 100%;
      background-color: ${sidebarBgColor};
      overflow-x: hidden;
      overflow-y: auto;
      transform: translateX(-100%) translateY(0) translateZ(0);
      -webkit-overflow-scrolling: touch;
      will-change: transform;
      transition: transform 0.28s ease-out;
    }
    .${className}-js-sidebar-scroll {
      height: calc(100% - ${headerHeight}px);
      overflow-x: hidden;
      overflow-y: auto;
    }
    .${className}-content-side {
      width: 100%;
      margin: 0 auto;
      overflow-x: hidden;
    }
    @media screen and (min-width: ${mobileWidth}px) {
      .${className} {
        width: ${sidebarWidth}px;
        transform: translateX(0) translateY(0) translateZ(0);
      }
      .${pageContainerClass}-sidebar-mini .${className} {
        overflow-x: hidden;
        transform: translateX(-${
          sidebarWidth - sidebarMiniWidth
        }px) translateY(0) translateZ(0);
        transition: transform 0.28s ease-out;
      }
      .${pageContainerClass}-sidebar-mini .${className} .${className}-content-side {
          width: ${sidebarWidth}px;
          transform: translateX(${
            sidebarWidth - sidebarMiniWidth
          }px) translateY(0) translateZ(0);
          transition: transform .28s ease-out;
          will-change: transform;
      }
      .${pageContainerClass}-sidebar-mini .${className}:hover,
      .${pageContainerClass}-sidebar-mini .${className}:hover .${className}-content-side {
        transform: translateX(0);
      }
    }
    @media (max-width: ${mobileWidth - 0.02}px) {
      .${pageContainerClass}-sidebar-full .${className} {
        transform: translateX(0) translateY(0) translateZ(0);
      }
    }
  `,
);

export const contentHeaderClass = cssHash(
  (className) => `
    .${className} {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      height: ${headerHeight}px;
      position: relative;
      z-index: 1;
    }
    .${pageHeaderClass} .${className} {
      background-color: ${pageHeaderBgColor};
      padding-left: 16px;
      padding-right: 16px;
    }
    .${pageHeaderClass} .${className}-collapse-button {
      background-color: ${collapseButtonBgColor};
      color: ${collapseButtonColor};
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      cursor: pointer;
      border-radius: 5px;
    }
    .${pageHeaderClass} .${className}-collapse-button:hover {
      background-color: ${collapseButtonHoverBgColor};
      color: ${collapseButtonHoverColor};
    }
    .${sidebarClass} .${className} {
      background-color: ${sidebarHeaderBgColor};
      color: ${sidebarHeaderColor};
      padding-left: 20px;
      padding-right: 20px;
    }
    .${sidebarClass} .${className}-close-button {
      background-color: ${sidebarCloseButtonBgColor};
      color: ${sidebarCloseButtonColor};
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      cursor: pointer;
      border-radius: 5px;
    }
    .${sidebarClass} .${className}-close-button:hover {
      background-color: ${sidebarCloseButtonHoverBgColor};
      color: ${sidebarCloseButtonHoverColor};
    }
    @media screen and (min-width: ${mobileWidth}px) {
      .${pageContainerClass}-sidebar-mini .${sidebarClass} .${className} {
        width: ${sidebarWidth}px;
        transform: translateX(${
          sidebarWidth - sidebarMiniWidth
        }px) translateY(0) translateZ(0);
        transition: transform 0.28s ease-out;
        will-change: transform;
      }
      .${pageContainerClass}-sidebar-mini .${sidebarClass}:hover .${className} {
        transform: translateX(0);
      }
      .${pageContainerClass}-sidebar-mini .${sidebarClass} .${className}-logo {
        display: none;
      }
      .${pageContainerClass}-sidebar-mini .${sidebarClass}:hover .${className}-logo {
        display: initial;
      }
    }
  `,
);

export const mainContainerClass = cssHash(
  (className) => `
    .${className} {
      display: flex;
      flex-direction: column;
      flex: 1 0 auto;
      max-width: 100%;
      padding-top: ${headerHeight}px;
      background-color: ${mainContainerBgColor};
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
      border-bottom: ${linkBorderBottom};
    }
    ul.${className} li a {
      background-color: ${linkBgColor};
      color: ${linkColor};
      display: flex;
      align-items: center;
      padding: 15px 20px;
      text-decoration: none;
    }
    ul.${className} > li > a:hover,
    ul.${className} > li > a:focus {
      background-color: ${linkHoverBgColor};
      color: ${linkHoverColor};
    }
    ul.${className} > li.active > a {
      background-color: ${linkActiveBgColor};
      color: ${linkActiveColor};
      border-left: ${linkActiveBorderLeft};
      border-right: ${linkActiveBorderRight};
    }
    ul.${className} > li:hover > a {
      color: ${linkHoverColor};
    }
    ul.${className} ul > li > a:hover,
    ul.${className} ul > li > a:focus {
      background-color: ${subLinkHoverBgColor};
      color: ${subLinkHoverColor};
    }
    ul.${className} ul > li.active > a,
    ul.${className} ul > li.has-sub.active > a {
      background-color: ${subLinkActiveBgColor};
      color: ${subLinkActiveColor};
    }
    ul.${className} ul > li > a {
      background-color: ${subLinkBgColor};
      color: ${subLinkColor};
    }
    ul.${className} li .menu-icon {
      margin-right: 16px;
      font-size: 15px;
      display: inline-flex;
    }
    ul.${className} li ul {
      list-style: outside none none;
      margin: 0;
      padding: 0;
      position: relative;
      z-index: 1;
      background-color: ${subLinkMenuBgColor};
      overflow: hidden;
    }
    ul.${className} li ul li {
      border-top: ${subLinkItemBorderTop};
    }
    ul.${className} > li > ul > li:before {
      background-color: transparent;
      content: "";
      font-weight: 400;
      height: 18px;
      left: 30px;
      position: absolute;
      top: 13px;
      width: ${subLinkLeftPadWidth}px;
      z-index: 2;
    }
    ul.${className} > li > a > span {
      
    }
    ul.${className} li ul li.active span.title {
      font-weight: 500;
    }
    ul.${className} li ul li:hover:before {
      background-color: ${subLinkLeftPadBgColor};
    }
    ul.${className} li ul li.active:before {
      background-color: ${subLinkLeftPadBgColor};
    }
    ul.${className} li ul li.has-sub:hover > a > .collapse-icon,
    ul.${className} li ul li.has-sub > a:focus > .collapse-icon {
      color: ${subLinkHoverColor};
    }
    ul.${className} li ul li.active > a,
    ul.${className} li ul li.has-sub.active > a > .collapse-icon {
      color: ${subLinkActiveColor};
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
      color: ${linkColor};
      display: inline-flex;
      float: right;
      font-size: 15px;
      margin-left: 10px;
      position: relative;
      font-weight: normal;
    }
    ul.${className} li.active.has-sub > a > .collapse-icon {
      color: ${linkActiveColor};
    }
    ul.${className} li.has-sub > a:hover > .collapse-icon,
    ul.${className} > li > a:focus > .collapse-icon {
      color: ${linkHoverColor};
    }
    @media screen and (max-width: ${mobileWidth}px) {
      ul.${className} {
        margin-bottom: 0;
        border: 0 none;
        -moz-box-shadow: none;
        -webkit-box-shadow: none;
        box-shadow: none;
      }
    }
    .${pageContainerClass}-sidebar-mini ul.${className} li span.title {
      display: none;
    }
    .${pageContainerClass}-sidebar-mini .${sidebarClass}:hover ul.${className} li span.title {
      display: initial;
    }
    .${pageContainerClass}-sidebar-mini ul.${className} li ul {
      height: 0px;
    }
    .${pageContainerClass}-sidebar-mini .${sidebarClass}:hover ul.${className} li ul {
      height: initial;
    }
  `,
);
