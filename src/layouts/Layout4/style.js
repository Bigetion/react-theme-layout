import { cssHash } from 'css-hash';

export const mobileWidth = 992;

const headerHeight = 64;
const pageHeaderBgColor = '#FAFBFC';

const sidebarWidth = 280;
const sidebarMiniWidth = 60;
const sidebarBgColor = '#1F2937';
const sidebarHeaderBgColor = '#232E3E';

const collapseButtonBgColor = '#EBEEF2';
const collapseButtonHoverBgColor = '#D4D6DA';
const collapseButtonColor = '#000000';
const collapseButtonHoverColor = '#000000';

const sidebarCloseButtonBgColor = '#283547';
const sidebarCloseButtonHoverBgColor = '#161D27';
const sidebarCloseButtonColor = '#FFFFFF';
const sidebarCloseButtonHoverColor = '#FFFFFF';

const mainContainerBgColor = '#FFFFFF';

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
      overflow-y: auto;
    }
    .${className}-simplebar-wrapper {
      position: relative;
      overflow: hidden;
      width: inherit;
      height: inherit;
      max-width: inherit;
      max-height: inherit
    }
    .${className}-simplebar-mask {
      direction: inherit;
      position: absolute;
      overflow: hidden;
      padding: 0;
      margin: 0;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      width: auto !important;
      height: auto !important;
      z-index: 0;
    }
    .${className}-simplebar-offset {
      direction: inherit !important;
      box-sizing: inherit !important;
      resize: none !important;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      padding: 0;
      margin: 0;
      -webkit-overflow-scrolling: touch;
    }
    .${className}-simplebar-content-wrapper {
      direction: inherit;
      box-sizing: border-box !important;
      position: relative;
      display: block;
      height: 100%;
      width: auto;
      max-width: 100%;
      max-height: 100%;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
    .${className}-simplebar-content:after,
    .${className}-simplebar-content:before {
      content: ' ';
      display: table;
    }
    .${className}-content-side {
      width: 100%;
      margin: 0 auto;
      padding: 1.25rem 1.25rem 1px;
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
      .${pageContainerClass}-sidebar-mini .${className}:hover,
      .${pageContainerClass}-sidebar-mini .${className}:hover .${className}-content-side {
        transform: translateX(0);
      }
      .${pageContainerClass}-sidebar-mini .${className} .${className}-content-side {
          width: ${sidebarWidth}px;
          transform: translateX(${
            sidebarWidth - sidebarMiniWidth
          }px) translateY(0) translateZ(0);
          transition: transform .28s ease-out;
          will-change: transform;
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
      .${className} {
        .${pageContainerClass}-sidebar-mini .${sidebarClass} .${className} {
          width: ${sidebarWidth}px;
          transform: translateX(${
            sidebarWidth - sidebarMiniWidth
          }px) translateY(0) translateZ(0);
          transition: transform 0.28s ease-out;
          will-change: transform;
          position: relative;
          z-index: 1;
        }
        .${pageContainerClass}-sidebar-mini .${sidebarClass}:hover,
        .${pageContainerClass}-sidebar-mini .${sidebarClass}:hover .${className} {
          transform: translateX(0);
        }
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
