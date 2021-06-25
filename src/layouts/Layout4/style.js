import { cssHash } from 'css-hash';

export const mobileWidth = 992;

// const mainContainerBgColor = '#FFFFFF';

// const pageSidebarWidth = 280;
// const pageSidebarBgColor = '#2C365A';
// const pageSidebarZIndex = 101;
// const pageSidebarCollapsedWidth = 60;

// const siteHeaderHeight = 60;
// const siteHeaderBgColor = '#2C365A';
// const siteHeaderColor = '#FFFFFF';
// const siteHeaderBorderBottom = '1px solid #252F54';
// const siteHeaderContentPadding = '0 20px';
// const siteHeaderZIndex = 101;

// const mainHeaderHeight = 60;
// const mainHeaderBorderBottom = 'solid 1px #E3E1E1';
// const mainHeaderContentPadding = '0 20px';

// const mainContentPadding = '0px';

// const mobileMenuBgHover = '#212B4F';
// const collapseMenuBgHover = '#F8F8F8';

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
        padding-left: 240px;
      }
      .${className}-sidebar-mini {
        padding-left: 60px;
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
        padding-left: 240px;
      }
      .${pageContainerClass}-sidebar-mini .${className} {
        padding-left: 60px;
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
      color: #e9ecef;
      background-color: #1f2937;
      overflow-x: hidden;
      overflow-y: auto;
      transform: translateX(-100%) translateY(0) translateZ(0);
      -webkit-overflow-scrolling: touch;
      will-change: transform;
      transition: transform 0.28s ease-out;
    }
    .${className}-content-side {
      height: calc(100% - 64px);
      overflow-y: auto;
    }
    @media screen and (min-width: ${mobileWidth}px) {
      .${className} {
        width: 240px;
        transform: translateX(0) translateY(0) translateZ(0);
      }
      .${pageContainerClass}-sidebar-mini .${className} {
        overflow-x: hidden;
        transform: translateX(-180px) translateY(0) translateZ(0);
        transition: transform 0.28s ease-out;
      }
      .${pageContainerClass}-sidebar-mini .${className}:hover {
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
      height: 64px;
    }
    .${pageHeaderClass} .${className} {
      background-color: #FAFBFC;
      padding-left: 16px;
      padding-right: 16px;
    }
    .${pageHeaderClass} .${className}-collapse-button {
      background-color: #ebeef2;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      cursor: pointer;
      border-radius: 5px;
    }
    .${pageHeaderClass} .${className}-collapse-button:hover {
      background-color: #d4d6da;
    }
    .${sidebarClass} .${className} {
      background-color: #232e3e;
      padding-left: 20px;
      padding-right: 20px;
    }
    .${sidebarClass} .${className}-close-button {
      background-color: #283547;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      cursor: pointer;
      border-radius: 5px;
    }
    .${sidebarClass} .${className}-close-button:hover {
      background-color: #161D27;
    }
    @media screen and (min-width: ${mobileWidth}px) {
      .${className} {
        .${pageContainerClass}-sidebar-mini .${sidebarClass} .${className} {
          width: 240px;
          transform: translateX(180px) translateY(0) translateZ(0);
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
      padding-top: 64px;
    }
  `,
);
