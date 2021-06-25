import { cssHash } from 'css-hash';

export const mobileWidth = 922;

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

cssHash(
  () => `
    .page-container {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      max-width: 100%;
      min-height: 100vh;
    }

    .page-container .page-header {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 1030;
      max-width: 100%;
      width: auto;
    }

    .page-container .main-container {
      padding-top: 64px;
    }

    .page-container .sidebar > .content-header {
      background-color: #f6f7f9;
    }

    .page-container .sidebar {
      color: #e9ecef;
      background-color: #1f2937;
    }

    .page-container .sidebar > .content-header {
      background-color: #232e3e;
    }

    .page-container .sidebar .content-side {
      overflow-y: visible;
    }

    .sidebar {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 1032;
      width: 100%;
      height: 100%;
      background-color: #fff;
      overflow-x: hidden;
      overflow-y: auto;
      transform: translateX(-100%) translateY(0) translateZ(0);
      -webkit-overflow-scrolling: touch;
      will-change: transform;
    }

    .sidebar .content-header {
      padding-left: 20px;
      padding-right: 20px;
    }

    .side-trans-enabled .sidebar {
      transition: transform 0.28s ease-out;
    }

    .sidebar .content-side {
      height: calc(100% - 64px);
      overflow-y: auto;
    }

    .content-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      height: 64px;
    }

    .page-header .content-header {
      padding-left: 16px;
      padding-right: 16px;
    }

    .page-header {
      position: relative;
      margin: 0 auto;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.75);
    }

    .collapse-menu-button {
      background-color: #ebeef2;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      cursor: pointer;
      border-radius: 5px;
    }
    .collapse-menu-button:hover {
      background-color: #d4d6da;
    }

    .main-container {
      display: flex;
      flex-direction: column;
      flex: 1 0 auto;
      max-width: 100%;
    }

    @media (min-width: 992px) {
      .page-container,
      .page-container .page-header {
        padding-left: 240px;
      }

      .page-container.sidebar-mini,
      .page-container.sidebar-mini .page-header {
        padding-left: 60px;
      }

      .sidebar {
        width: 240px;
        transform: translateX(0) translateY(0) translateZ(0);
      }

      .sidebar-mini .sidebar {
        overflow-x: hidden;
        transform: translateX(-180px) translateY(0) translateZ(0);
        transition: transform 0.28s ease-out;
      }

      .sidebar-mini .sidebar .content-header {
        width: 240px;
        transform: translateX(180px) translateY(0) translateZ(0);
        transition: transform 0.28s ease-out;
        will-change: transform;
      }

      .sidebar-mini .sidebar .content-header {
        position: relative;
        z-index: 1;
      }

      .sidebar-mini .sidebar:hover,
      .sidebar-mini .sidebar:hover .content-header {
        transform: translateX(0);
      }
    }

    @media (max-width: 991.98px) {
      .sidebar-o-xs .sidebar {
        transform: translateX(0) translateY(0) translateZ(0);
      }
    }
  `,
);
