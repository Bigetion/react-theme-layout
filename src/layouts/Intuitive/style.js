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

const linkBgColor = '#2D3B50';
const linkHoverBgColor = '#293649';
const linkActiveBgColor = '#293649';

const linkColor = '#F0F4F6';
const linkHoverColor = '#F0F4F6';
const linkActiveColor = '#F0F4F6';

const linkIconColor = '#6382A9';
const linkTitleColor = '#6382A9';

const subLinkBgColor = '#253143';
const subLinkHoverBgColor = '#222C3C';
const subLinkActiveBgColor = '#222C3C';

const subLinkPadBgColor = '#293649';
const subLinkPadHoverBgColor = '#304056';
const subLinkPadActiveBgColor = '#304056';

const subLinkColor = '#D7DDE2';
const subLinkHoverColor = '#D7DDE2';
const subLinkActiveColor = '#D7DDE2';

const linkActiveBorderLeft = '3px solid #FFFFFF';
const linkActiveBorderRight = 'none';

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
      background-color: ${linkBgColor};
      color: ${linkColor};
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
      line-height: 45px;
      text-align: center;
      font-size: 14px;
      color: ${linkIconColor};
    }
    .${className} > li.active > a {
      background-color: ${linkActiveBgColor};
      color: ${linkActiveColor};
      border-left: ${linkActiveBorderLeft};
      border-right: ${linkActiveBorderRight};
    }
    .${className} > li.active > a .fa {
      background-color: ${linkActiveBgColor};
    }
    .${className} > li:hover > a {
      background-color: ${linkHoverBgColor};
      color: ${linkHoverColor};
    }
    .${className} > li.title {
      font-size: 11px;
      text-transform: uppercase;
      padding: 15px 10px 10px;
      color: ${linkTitleColor};
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
      background-color: ${subLinkBgColor};
      color: ${subLinkColor};
      font-weight: 300;
      text-decoration: none;
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
      background-color: ${subLinkPadBgColor};
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
      background-color: ${subLinkHoverBgColor};
      color: ${subLinkHoverColor};
    }
    .${className} > li ul li a:hover:after {
      background-color: ${subLinkPadHoverBgColor};
    }
    .${className} > li ul li.active > a {
      background-color: ${subLinkActiveBgColor};
      color: ${subLinkActiveColor};
    }
    .${className} > li ul li.active > a:after {
      background-color: ${subLinkPadActiveBgColor};
    }
    .${className} > li ul li.has-sub > a:before {
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
    .${className} li.has-sub > a:before {
      content: "\\f105";
      display: inline-block;
      float: right;
      font-family: "fontawesome";
      font-size: 15px;
      margin-left: 10px;
      position: relative;
      -webkit-transition: all 300ms ease-in-out;
      -o-transition: all 300ms ease-in-out;
      transition: all 300ms ease-in-out;
      font-weight: normal;
    }
    .${className} li.has-sub.active > a:before {
      -webkit-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
      -o-transform: rotate(90deg);
      transform: rotate(90deg);
    }
    .${className} li.has-sub > a {
      padding-right: 30px;
    }
    .${layoutClass}.${pageSidebarMinimizedClass} .${className} {
      width: ${pageSidebarMinimizedWidth}px;
    }
    .${layoutClass}.${pageSidebarMinimizedClass} .${className} > li {
      width: ${pageSidebarMinimizedWidth}px;
    }
    .${layoutClass}.${pageSidebarMinimizedClass} .${className} > li > a {
      padding-left: ${pageSidebarMinimizedWidth}px;
      width: ${pageSidebarMinimizedWidth}px;
      background-color: transparent;
    }
    .${layoutClass}.${pageSidebarMinimizedClass} .${className} > li > a .fa {
      width: ${pageSidebarMinimizedWidth}px;
      background-color: ${linkBgColor};
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
      background-color: ${linkHoverBgColor};
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
      -webkit-animation-duration: 200ms;
      animation-duration: 200ms;
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
    .${layoutClass}.${pageSidebarMinimizedClass} .${className} > li.has-sub > a:before {
      display: none;
    }
    .${layoutClass}.${pageSidebarMinimizedClass} .${className} li.active > ul {
      display: block;
    }
    .${layoutClass}.${pageSidebarMinimizedClass} .${className} li.active.has-sub > a:before {
      content: "\\f104";
    }
    .${layoutClass}.${pageSidebarMinimizedClass} .${className} li.has-sub > a:before {
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
    .${layoutClass}.${pageSidebarCollapsedClass} .${className} > li.has-sub > a:before {
      display: none;
    }
  `,
);
