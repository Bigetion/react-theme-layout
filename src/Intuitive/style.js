import { cssHash } from 'css-hash';

const pageSidebarWidth = 300;
const pageSidebarMinimizedWidth = 55;
const pageHeaderHeight = 55;

export const mobileWidth = 992;

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
      background: #ffffff;
      color: #263c46;
      position: absolute;
      left: 0px;
      top: 0px;
      z-index: 5;
      -moz-box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
      -webkit-box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
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

export const pageHeaderLogoClass = cssHash(
  (className) => `
    .${layoutClass} .${pageHeaderClass} .${className} {
      float: left;
      width: ${pageSidebarWidth}px;
      height: ${pageHeaderHeight}px;
      line-height: ${pageHeaderHeight}px;
      background: #364760;
      color: #ffffff;
      text-align: center;
      position: relative;
      margin-right: 55px;
    }
    .${layoutClass} .${pageHeaderClass} .${className} a {
      width: 100%;
      display: block;
      height: ${pageHeaderHeight}px;
      overflow: hidden;
      color: #ffffff;
    }
    .${layoutClass} .${pageHeaderClass} .${className} a:hover {
      background-color: #3a4c67;
    }
    .${layoutClass} .${pageHeaderClass} .${className} .${className}-collapse-menu {
      position: absolute;
      top: 0px;
      color: #000000;
      background: #ffffff;
      height: 55px;
      width: 55px;
      text-decoration: none;
      right: -55px;
      cursor: pointer;
    }
    .${layoutClass} .${pageHeaderClass} .${className} .${className}-collapse-menu:hover {
      background: #fafafa;
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
        color: #f0f4f6;
        background: #364760;
      }
      .${layoutClass} .${pageHeaderClass} .${className} .${className}-collapse-menu:hover {
        background: #324259;
      }
    }  
  `,
);

export const pageContainerClass = cssHash(
  (className) => `
    .${layoutClass} .${className} {
      position: relative;
      z-index: 4;
      float: left;
      width: 100%;
      height: calc(100% - ${pageHeaderHeight}px);
      min-height: calc(100% - ${pageHeaderHeight}px);
      padding-top: ${pageHeaderHeight}px;
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
      z-index: 3;
      height: auto;
      min-height: calc(100% - ${pageHeaderHeight}px);
      width: ${pageSidebarWidth}px;
      background: #304056;
      color: #f0f4f6;
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
      z-index: 2;
      width: calc(100% - ${pageSidebarWidth}px);
      height: 100%;
      min-height: 100%;
      padding-left: ${pageSidebarWidth}px;
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

export const navigationClass = cssHash(
  (className) => `
    .${className} {
      width: 100%;
      position: relative;
      margin: 0px;
      padding: 0px;
      float: left;
      list-style: none;
    }
    .${className} * {
      -ms-box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
    .${className} > li {
      float: left;
      width: 100%;
      margin-bottom: 1px;
      position: relative;
      cursor: pointer;
    }
    .${className} > li > a {
      display: block;
      float: left;
      width: 100%;
      background-color: #2d3b50;
      color: #f0f4f6;
      font-size: 13px;
      font-weight: 500;
      line-height: 45px;
      text-decoration: none;
      padding-left: 45px;
      white-space: nowrap;
      position: relative;
    }
    .${className} > li > a .fa {
      position: absolute;
      left: 0px;
      top: 0px;
      width: 45px;
      height: 55px;
      line-height: 45px;
      text-align: center;
      font-size: 14px;
      color: #6382a9;
    }
    .${className} > li.active > a {
      background-color: #293649;
    }
    .${className} > li.active > a .fa {
      background-color: #293649;
    }
    .${className} > li:hover > a {
      background-color: #293649;
    }
    .${className} > li.title {
      font-size: 11px;
      text-transform: uppercase;
      padding: 15px 10px 10px;
      color: #6382a9;
      cursor: default;
    }
    .${className} > li ul {
      float: left;
      width: 100%;
      margin: 0px;
      padding: 0px;
      list-style: none;
      overflow-y: hidden;
    }
    .${className} > li ul li {
      float: left;
      width: 100%;
      position: relative;
    }
    .${className} > li ul li a {
      display: block;
      float: left;
      width: 100%;
      line-height: 45px;
      font-size: 13px;
      color: #d7dde2;
      font-weight: 300;
      text-decoration: none;
      background-color: #253143;
      -webkit-transition: all 200ms ease;
      -moz-transition: all 200ms ease;
      -ms-transition: all 200ms ease;
      -o-transition: all 200ms ease;
      transition: all 200ms ease;
    }
    .${className} > li ul li a:after {
      content: " ";
      width: 1px;
      height: 45px;
      background-color: #293649;
      position: absolute;
      left: 22.5px;
      top: 0px;
      -webkit-transition: background-color 200ms linear;
      -moz-transition: background-color 200ms linear;
      -o-transition: background-color 200ms linear;
      -ms-transition: background-color 200ms linear;
      transition: background-color 200ms linear;
    }
    .${className} > li ul li a:hover {
      background-color: #222c3c;
    }
    .${className} > li ul li a:hover:after {
      background-color: #304056;
    }
    .${className} > li ul li.active > a {
      background-color: #222c3c;
    }
    .${className} > li ul li.active > a:after {
      background-color: #364760;
    }
    .${className} > li ul li.has-child > a:before {
      line-height: 45px;
      height: 45px;
    }
    .${className} > li > ul > li > a {
      padding: 0px 10px 0px 45px;
    }
    .${className} > li > ul > li > a:hover,
    .${className} > li > ul > li.active > a {
      padding-left: 55px;
    }
    .${className} > li > ul > li > ul > li > a {
      padding: 0px 10px 0px 75px;
    }
    .${className} > li > ul > li > ul > li > a:after {
      left: 55px;
    }
    .${className} > li > ul > li > ul > li > a:hover,
    .${className} > li > ul > li > ul > li.active > a {
      padding-left: 85px;
    }
    .${className} li.has-child > a:before {
      content: "\\f107";
      font-family: FontAwesome;
      position: absolute;
      font-size: 14px;
      line-height: 45px;
      width: 30px;
      height: 55px;
      text-align: center;
      right: 0px;
      top: 0px;
    }
    .${className} li.has-child.active > a:before {
      content: "\\f106";
    }
    .${className} li.has-child > a {
      padding-right: 30px;
    }
    .${layoutClass}.${pageSidebarMinimizedClass} .${className} {
      width: 55px;
    }
    .${layoutClass}.${pageSidebarMinimizedClass} .${className} > li {
      width: 55px;
    }
    .${layoutClass}.${pageSidebarMinimizedClass} .${className} > li > a {
      padding-left: 55px;
      width: 55px;
      background-color: transparent;
    }
    .${layoutClass}.${pageSidebarMinimizedClass} .${className} > li > a .fa {
      width: 55px;
      background-color: #2d3b50;
    }
    .${layoutClass}.${pageSidebarMinimizedClass} .${className} > li > a span {
      -webkit-opacity: 0;
      -khtml-opacity: 0;
      -moz-opacity: 0;
      -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0);
      filter: alpha(opacity=0);
      opacity: 0;
      filter: alpha(opacity = 0 * 100);
    }
    .${layoutClass}.${pageSidebarMinimizedClass} .${className} > li > a:hover .fa {
      background-color: #293649;
    }
    .${layoutClass}.${pageSidebarMinimizedClass} .${className} > li.title {
      overflow: hidden;
      height: 0px;
      padding: 1px 0px 0px;
      display: none;
    }
    .${layoutClass}.${pageSidebarMinimizedClass} .${className} > li > ul {
      margin-top: 5px;
    }
    .${layoutClass}.${pageSidebarMinimizedClass} .${className} > li ul {
      position: absolute;
      top: 0px;
      left: 100%;
      width: ${pageSidebarWidth}px;
      margin-left: 10px;
      z-index: 999;
      overflow-y: visible;
      display: none;
      -webkit-animation-duration: 100ms;
      animation-duration: 100ms;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      -webkit-animation-name: zoomIn;
      animation-name: zoomIn;
    }
    .${layoutClass}.${pageSidebarMinimizedClass} .${className} > li ul > li > a {
      padding: 0px 15px;
    }
    .${layoutClass}.${pageSidebarMinimizedClass} .${className} > li ul > li > a:hover {
      padding-left: 25px;
    }
    .${layoutClass}.${pageSidebarMinimizedClass} .${className} > li ul > li > a:after {
      display: none;
    }
    .${layoutClass}.${pageSidebarMinimizedClass} .${className} > li ul > li:first-child > a {
      -webkit-border-top-right-radius: 5px 5px 0px 0px;
      -webkit-border-bottom-right-radius: 0;
      -webkit-border-bottom-left-radius: 0;
      -webkit-border-top-left-radius: 0;
      -moz-border-radius-topright: 5px 5px 0px 0px;
      -moz-border-radius-bottomright: 0;
      -moz-border-radius-bottomleft: 0;
      -moz-border-radius-topleft: 0;
      border-top-right-radius: 5px 5px 0px 0px;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      -moz-background-clip: padding-box;
      -webkit-background-clip: padding-box;
      background-clip: padding-box;
      -moz-border-radius: 5px 5px 0px 0px;
      -webkit-border-radius: 5px 5px 0px 0px;
      border-radius: 5px 5px 0px 0px;
    }
    .${layoutClass}.${pageSidebarMinimizedClass} .${className} > li ul > li:last-child > a {
      -webkit-border-top-right-radius: 0px 0px 5px 5px;
      -webkit-border-bottom-right-radius: 0;
      -webkit-border-bottom-left-radius: 0;
      -webkit-border-top-left-radius: 0;
      -moz-border-radius-topright: 0px 0px 5px 5px;
      -moz-border-radius-bottomright: 0;
      -moz-border-radius-bottomleft: 0;
      -moz-border-radius-topleft: 0;
      border-top-right-radius: 0px 0px 5px 5px;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      -moz-background-clip: padding-box;
      -webkit-background-clip: padding-box;
      background-clip: padding-box;
      -moz-border-radius: 0px 0px 5px 5px;
      -webkit-border-radius: 0px 0px 5px 5px;
      border-radius: 0px 0px 5px 5px;
    }
    .${layoutClass}.${pageSidebarMinimizedClass} .${className} > li ul > li.active > a {
      padding-left: 25px;
    }
    .${layoutClass}.${pageSidebarMinimizedClass} .${className} > li ul:after {
      right: 100%;
      top: 22.5px;
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-color: rgba(54, 71, 96, 0);
      border-right-color: #253143;
      border-width: 5px;
      margin-top: -5px;
    }
    .${layoutClass}.${pageSidebarMinimizedClass} .${className} > li.active > a .fa {
      background-color: #293649;
    }
    .${layoutClass}.${pageSidebarMinimizedClass} .${className} > li.has-child > a:before {
      display: none;
    }
    .${layoutClass}.${pageSidebarMinimizedClass} .${className} li.active > ul {
      display: block;
    }
    .${layoutClass}.${pageSidebarMinimizedClass} .${className} li.active.has-child > a:before {
      content: "\\f104";
    }
    .${layoutClass}.${pageSidebarMinimizedClass} .${className} li.has-child > a:before {
      content: "\\f105";
    }
    .${layoutClass}.${pageSidebarMinimizedClass}.dev-page-sidebar-right .${className} > li ul {
      left: auto;
      right: 100%;
      margin-left: 0px;
      margin-right: 10px;
    }
    .${layoutClass}.${pageSidebarMinimizedClass}.dev-page-sidebar-right .${className} > li ul:after {
      right: auto;
      left: 100%;
      border-right-color: transparent;
      border-left-color: #253143;
    }
    .${layoutClass}.${pageSidebarCollapsedClass} .${className} {
      display: none;
    }
    .${layoutClass}.${pageSidebarCollapsedClass} .${className} > li > a {
      -webkit-opacity: 0;
      -khtml-opacity: 0;
      -moz-opacity: 0;
      -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0);
      filter: alpha(opacity=0);
      opacity: 0;
      filter: alpha(opacity = 0 * 100);
    }
    .${layoutClass}.${pageSidebarCollapsedClass} .${className} > li > a .fa {
      -webkit-opacity: 0;
      -khtml-opacity: 0;
      -moz-opacity: 0;
      -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0);
      filter: alpha(opacity=0);
      opacity: 0;
      filter: alpha(opacity = 0 * 100);
      width: 0px;
    }
    .${layoutClass}.${pageSidebarCollapsedClass} .${className} > li > a span {
      display: none;
    }
    .${layoutClass}.${pageSidebarCollapsedClass} .${className} > li ul {
      -webkit-opacity: 0;
      -khtml-opacity: 0;
      -moz-opacity: 0;
      -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0);
      filter: alpha(opacity=0);
      opacity: 0;
      filter: alpha(opacity = 0 * 100);
    }
    .${layoutClass}.${pageSidebarCollapsedClass} .${className} > li.has-child > a:before {
      display: none;
    }
  `,
);
