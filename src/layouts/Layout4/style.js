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
      min-width: 320px;
      min-height: 100vh;
    }

    .page-container .page-header {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 1030;
      min-width: 320px;
      max-width: 100%;
      width: auto;
    }

    .page-container .main-container {
      padding-top: 4rem;
    }

    @media (min-width: 992px) {
      .page-container.sidebar-o .page-header {
        padding-left: 240px;
      }

      .page-container.sidebar-o .page-header .overlay-header {
        left: 240px;
      }

      .page-container.sidebar-mini.sidebar-o .page-header {
        padding-left: 60px;
      }

      .page-container.sidebar-mini.sidebar-o .page-header .overlay-header {
        left: 60px;
      }
    }

    .page-container .sidebar > .content-header {
      background-color: #f6f7f9;
    }

    .page-container.sidebar-dark .sidebar {
      color: #e9ecef;
      background-color: #1f2937;
    }

    .page-container.sidebar-dark .sidebar > .content-header {
      background-color: #232e3e;
    }

    .page-container.side-scroll .sidebar .js-sidebar-scroll {
      overflow-y: visible;
    }

    @media (min-width: 992px) {
      .page-container.side-scroll .sidebar .content-header,
      .page-container.side-scroll .sidebar .content-side {
        width: 240px !important;
      }
    }

    @media (min-width: 992px) {
      .page-container.sidebar-o {
        padding-left: 240px;
      }

      .page-container.sidebar-mini.sidebar-o {
        padding-left: 60px;
      }
    }

    .sidebar .content-header {
      padding-left: 1.25rem;
      padding-right: 1.25rem;
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

    .side-trans-enabled .sidebar {
      transition: transform 0.28s ease-out;
    }

    .sidebar .js-sidebar-scroll {
      height: calc(100% - 4rem);
      overflow-y: auto;
    }

    .sidebar .js-sidebar-scroll.full-height {
      height: 100%;
    }

    @media (max-width: 991.98px) {
      .sidebar-o-xs .sidebar {
        transform: translateX(0) translateY(0) translateZ(0);
      }
    }

    @media (min-width: 992px) {
      .sidebar {
        width: 240px;
      }

      .sidebar-o .sidebar {
        transform: translateX(0) translateY(0) translateZ(0);
      }

      .sidebar-mini.sidebar-o .sidebar {
        overflow-x: hidden;
        transform: translateX(-180px) translateY(0) translateZ(0);
        transition: transform 0.28s ease-out;
      }

      .sidebar-mini.sidebar-o .sidebar .content-header,
      .sidebar-mini.sidebar-o .sidebar .content-side {
        width: 240px;
        transform: translateX(180px) translateY(0) translateZ(0);
        transition: transform 0.28s ease-out;
        will-change: transform;
      }

      .sidebar-mini.sidebar-o .sidebar .content-header {
        position: relative;
        z-index: 1;
      }

      .sidebar-mini.sidebar-o .sidebar:hover,
      .sidebar-mini.sidebar-o .sidebar:hover .content-header,
      .sidebar-mini.sidebar-o .sidebar:hover .content-side {
        transform: translateX(0);
      }

      .sidebar-mini.sidebar-o .sidebar .nav-main .nav-main-heading,
      .sidebar-mini.sidebar-o .sidebar .nav-main .nav-main-link-badge,
      .sidebar-mini.sidebar-o .sidebar .nav-main .nav-main-link-name {
        transition: opacity 0.28s ease-out;
      }

      .sidebar-mini.sidebar-o .sidebar:not(:hover) .smini-hide {
        opacity: 0;
      }

      .sidebar-mini.sidebar-o .sidebar:not(:hover) .smini-show {
        opacity: 1;
      }

      .sidebar-mini.sidebar-o .sidebar:not(:hover) .smini-hidden {
        display: none;
      }

      .sidebar-mini.sidebar-o .sidebar:not(:hover) .smini-visible {
        display: inline-block;
      }

      .sidebar-mini.sidebar-o .sidebar:not(:hover) .smini-visible-block {
        display: block;
      }

      .sidebar-mini.sidebar-o
        .sidebar:not(:hover)
        .nav-main
        > .nav-main-item
        > .nav-main-submenu {
        display: none;
      }

      .sidebar-mini.sidebar-o .sidebar:not(:hover) .nav-main .nav-main-heading,
      .sidebar-mini.sidebar-o .sidebar:not(:hover) .nav-main .nav-main-link-badge,
      .sidebar-mini.sidebar-o .sidebar:not(:hover) .nav-main .nav-main-link-name {
        opacity: 0;
      }
    }

    .sidebar-dark .sidebar .nav-main-heading {
      color: #7186a3;
    }

    .sidebar-dark .sidebar .nav-main-link {
      color: #9faec1;
    }

    .sidebar-dark .sidebar .nav-main-link > .nav-main-link-icon {
      color: rgba(159, 174, 193, 0.5);
    }

    .sidebar-dark .sidebar .nav-main-link:focus,
    .sidebar-dark .sidebar .nav-main-link:hover {
      color: #90a0b7;
      background-color: rgba(0, 0, 0, 0.2);
    }

    .sidebar-dark .sidebar .nav-main-link:focus > .nav-main-link-icon,
    .sidebar-dark .sidebar .nav-main-link:hover > .nav-main-link-icon {
      color: #fff;
    }

    .sidebar-dark .sidebar .nav-main-link.active {
      color: #fff;
    }

    .sidebar-dark .sidebar .nav-main-link.active > .nav-main-link-icon {
      color: #fff;
    }

    .sidebar-dark .sidebar .nav-main-submenu {
      background-color: rgba(0, 0, 0, 0.15);
    }

    .sidebar-dark .sidebar .nav-main-submenu .nav-main-link {
      color: #8093ad;
    }

    .sidebar-dark .sidebar .nav-main-submenu .nav-main-link.active,
    .sidebar-dark .sidebar .nav-main-submenu .nav-main-link:focus,
    .sidebar-dark .sidebar .nav-main-submenu .nav-main-link:hover {
      color: #fff;
      background-color: transparent;
    }

    .sidebar-dark .sidebar .nav-main-item.open > .nav-main-link-submenu,
    .sidebar-dark
      .sidebar
      .nav-main-item.open
      > .nav-main-link-submenu
      > .nav-main-link-icon {
      color: #fff;
    }

    .sidebar-dark .sidebar .nav-main-item.open > .nav-main-submenu {
      background-color: rgba(0, 0, 0, 0.1);
    }

    .sidebar-dark .sidebar .nav-main-submenu .nav-main-item.open .nav-main-link {
      background-color: transparent;
    }

    @media (min-width: 992px) {
      .sidebar-dark .sidebar .nav-main-horizontal .nav-main-submenu {
        background-color: #19222d !important;
        box-shadow: none;
      }

      .sidebar-dark
        .sidebar
        .nav-main-horizontal.nav-main-hover
        .nav-main-item:hover
        > .nav-main-link-submenu {
        color: #fff;
      }

      .sidebar-dark
        .sidebar
        .nav-main-horizontal.nav-main-hover
        .nav-main-item:hover
        > .nav-main-link-submenu
        > .nav-main-link-icon {
        color: #fff;
      }

      .sidebar-dark
        .sidebar
        .nav-main-horizontal.nav-main-hover
        .nav-main-submenu
        .nav-main-item:hover
        .nav-main-link {
        background-color: transparent;
      }
    }

    .sidebar-dark .sidebar .simplebar-scrollbar::before {
      background: #fff;
    }

    .content-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      height: 4rem;
    }

    .page-header .content-header {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    @media (min-width: 768px) {
      .page-header .content-header {
        padding-left: 1.875rem;
        padding-right: 1.875rem;
      }
    }

    .simplebar-wrapper {
      overflow: hidden;
      width: inherit;
      height: inherit;
      max-width: inherit;
      max-height: inherit;
    }

    .simplebar-mask {
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

    .simplebar-offset {
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

    .simplebar-content-wrapper {
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

    .simplebar-content-wrapper::-webkit-scrollbar,
    .simplebar-hide-scrollbar::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    .simplebar-content:after,
    .simplebar-content:before {
      content: ' ';
      display: table;
    }

    [data-simplebar].simplebar-dragging .simplebar-content {
      pointer-events: none;
      -moz-user-select: none;
      user-select: none;
      -webkit-user-select: none;
    }

    .content-side {
      width: 100%;
      margin: 0 auto;
      padding: 1.25rem 1.25rem 1px;
      overflow-x: hidden;
    }

    .page-header {
      position: relative;
      margin: 0 auto;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.75);
    }

    .main-container {
      display: flex;
      flex-direction: column;
      flex: 1 0 auto;
      max-width: 100%;
    }
  `,
);
