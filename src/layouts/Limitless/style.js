import { cssHash } from 'css-hash';

export const mobileWidth = 767;

const mainContainerBgColor = '#FFFFFF';

const pageSidebarWidth = 280;
const pageSidebarBgColor = '#263238';
const pageSidebarColor = '#FFFFFF';
const pageSidebarZIndex = 101;
const pageSidebarCollapsedWidth = 66;

const siteHeaderHeight = 60;
const siteHeaderBgColor = '#222D32';
const siteHeaderColor = '#FFFFFF';
const siteHeaderBorderBottom = 'solid 1px #364044';
const siteHeaderContentPadding = '0 20px';
const siteHeaderZIndex = 101;

const mainHeaderHeight = 60;
const mainHeaderBorderBottom = 'solid 1px #E3E1E1';
const mainHeaderContentPadding = '0 20px';

const mainContentPadding = '0px';

const mobileMenuBgHover = '#1F282D';
const collapseMenuBgHover = '#F8F8F8';

const linkBgColor = '#263238';
const linkHoverBgColor = '#222D32';
const linkActiveBgColor = '#26A69A';
const linkSpanBgColor = '#26A69A';
const linkDividerBgColor = 'rgba(255, 255, 255, 0.1)';

const linkColor = '#FFFFFF';
const linkHoverColor = '#FFFFFF';
const linkActiveColor = '#FFFFFF';
const linkSpanColor = '#FFFFFF';
const linkTitleColor = 'rgba(255, 255, 255, 0.5)';
const linkTitleHoverColor = '#FFFFFF';

const subLinkMenuBgColor = '#202B30';
const subLinkBgColor = '#202B30';
const subLinkHoverBgColor = '#1D272B';
const subLinkActiveBgColor = '#1D272B';

const subLinkColor = 'rgba(255, 255, 255, 0.75)';
const subLinkHoverColor = '#FFFFFF';
const subLinkActiveColor = '#FFFFFF';

export const pageContainerClass = cssHash(
  (className) => `
    .${className} {
      height: 100%;
      width: 100%;
      position: relative;
      display: table;
      table-layout: fixed;
    }
    @media screen and (max-width: ${mobileWidth}px) {
      .${className} {
        display: block;
        height: auto;
      }
    }
  `,
);

export const mainContainerClass = cssHash(
  (className) => `
    .${className} {
      background-color: ${mainContainerBgColor};
      position: relative;
      display: table-cell;
      width: 100%;
      vertical-align: top;
    }
    @media screen and (max-width: ${mobileWidth}px) {
      .${className} {
        display: block;
        height: auto;
      }
    }
  `,
);

export const pageSidebarClass = cssHash(
  (className) => `
    .${className} {
      background-color: ${pageSidebarBgColor};
      color: ${pageSidebarColor};
      display: table-cell;
      height: 100%;
      position: relative;
      vertical-align: top;
      width: ${pageSidebarWidth}px;
      z-index: ${pageSidebarZIndex};
      -moz-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
      -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
    }
    @media screen and (max-width: ${mobileWidth}px) {
      .${className} {
        display: block;
        width: 100%;
        height: auto;
      }
    }
  `,
);

export const siteHeaderClass = cssHash(
  (className) => `
    .${className} {
      overflow: hidden;
      position: relative;
      z-index: ${siteHeaderZIndex};
      display: flex;
      justify-content: space-between;
      border-bottom: ${siteHeaderBorderBottom};
      height: ${siteHeaderHeight}px;
      background-color: ${siteHeaderBgColor};
      color: ${siteHeaderColor};
    }
    .${className}-mobile-menu {
      padding: 20px;
      cursor: pointer;
      display: none;
    }
    .${className}-content {
      padding: ${siteHeaderContentPadding};
    }
    @media screen and (max-width: ${mobileWidth}px) {
      .${className}-mobile-menu {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .${className}-mobile-menu:hover {
        background-color: ${mobileMenuBgHover};
      }
    }
  `,
);

export const mainHeaderClass = cssHash(
  (className) => `
    .${className} {
      display: flex;
      justify-content: space-between;
      border-bottom: ${mainHeaderBorderBottom};
      height: ${mainHeaderHeight}px;
    }
    .${className}-collapse-menu {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      cursor: pointer;
    }
    .${className}-collapse-menu:hover {
      background-color: ${collapseMenuBgHover};
    }
    .${className}-content {
      padding: ${mainHeaderContentPadding};
    }
    @media screen and (max-width: ${mobileWidth}px) {
      .${className}-collapse-menu {
        display: none;
      }
    }
  `,
);

export const mainContentClass = cssHash(
  (className) => `
    .${className} {
      padding: ${mainContentPadding};
    }
  `,
);

export const navigationClass = cssHash(
  (className) => `
    .${className} {
      margin: 0;
      padding: 10px 0;
      list-style: none;
      position: relative;
    }
    .${className} * {
      -ms-box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
    .${className} li {
      position: relative;
    }
    .${className} li + li {
      margin-top: 1px;
    }
    .${className} li + .navigation-header {
      margin-top: 10px;
    }
    .${className} li a {
      background-color: ${linkBgColor};
      color: ${linkColor};
      display: block;
      text-decoration: none;
      cursor: pointer;
      font-size: 14px;
    }
    .${className} li a:focus,
    .${className} li a:hover {
      background-color: ${linkHoverBgColor};
      color: ${linkHoverColor};
    }
    .${className} li a > i {
      float: left;
      top: 0;
      margin-top: 2px;
      margin-right: 15px;
    }
    .${className} li a > i.pull-right {
      margin-right: 0;
      margin-left: 15px;
    }
    .${className} li.disabled > a,
    .${className} li.disabled > a:focus,
    .${className} li.disabled > a:hover {
      color: inherit;
      background-color: transparent;
      cursor: not-allowed;
      opacity: 0.3;
      filter: alpha(opacity=30);
    }
    .${className} li > .has-sub {
      position: relative;
      padding-right: 36px;
    }
    .${className} li > .has-sub:after {
      content: "\\f105";
      font-family: "fontawesome";
      font-size: 16px;
      display: block;
      position: absolute;
      top: 50%;
      margin-top: -8px;
      right: 20px;
      line-height: 1;
      -webkit-transform: rotate(0);
      -ms-transform: rotate(0);
      -o-transform: rotate(0);
      transform: rotate(0);
      -webkit-transition: -webkit-transform 0.2s ease-in-out;
      -o-transition: -webkit-transform 0.2s ease-in-out;
      transition: -webkit-transform 0.2s ease-in-out;
    }
    .${className} li.active > .has-sub:after {
      -webkit-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
      -o-transform: rotate(90deg);
      transform: rotate(90deg);
    }
    .${className} li.navigation-divider {
      margin: 10px 0;
      height: 1px;
      background-color: ${linkDividerBgColor};
    }
    .${className} > li > a {
      padding: 12px 20px;
      height: 44px;
      font-weight: 500;
    }
    .${className} > li.active > a,
    .${className} > li.active > a:focus,
    .${className} > li.active > a:hover {
      background-color: ${linkActiveBgColor};
      color: ${linkActiveColor};
    }
    .${className} > li.active > a > [class*='text-'] {
      color: ${linkActiveColor};
    }
    .${className} > li.active > a .badge,
    .${className} > li.active > a .label {
      background-color: transparent;
      border-color: transparent;
      color: ${linkActiveColor};
    }
    .${className} > li ul {
      list-style: none;
      margin: 0;
      padding: 0;
      background-color: ${subLinkMenuBgColor};
      -moz-box-shadow: 0 1px 0 rgba(255, 255, 255, 0.05);
      -webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, 0.05);
      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.05);
    }
    .${className} > li ul li a {
      background-color: ${subLinkBgColor};
      color: ${subLinkColor};
      padding: 10px 20px 10px 51px;
      height: 40px;
    }
    .${className} > li ul li a:focus,
    .${className} > li ul li a:hover {
      background-color: ${subLinkHoverBgColor};
      color: ${subLinkHoverColor};
    }
    .${className} > li ul .navigation-header {
      padding-left: 51px;
    }
    .${className} > li > ul > li > ul > .navigation-header,
    .${className} > li > ul > li > ul > li > a {
      padding-left: 71px;
    }
    .${className} > li > ul > li > ul > li > ul .navigation-header,
    .${className} > li > ul > li > ul > li > ul > li > a {
      padding-left: 91px;
    }
    .${className} > li > ul li:first-child {
      padding-top: 10px;
    }
    .${className} > li > ul li:last-child {
      padding-bottom: 10px;
    }
    .${className} > li > ul li.active > a,
    .${className} > li > ul li.active > a:focus,
    .${className} > li > ul li.active > a:hover {
      background-color: ${subLinkActiveBgColor};
      color: ${subLinkActiveColor};
    }
    .${className} .navigation-header {
      height: 30px;
      padding: 10px 20px;
      border-bottom: 0;
      text-transform: uppercase;
      font-size: 11px;
      line-height: 1.82;
    }
    .${className} .navigation-header > span {
      display: block;
      margin-top: 2px;
    }
    .${className} .navigation-header > i {
      display: none;
    }
    .${className} .navigation-header > i.pull-right {
      margin-top: 2px;
    }
    .${className}-bordered li + .navigation-header,
    .${className}-bordered > li + li {
      margin-top: 0;
    }
    .${className} .navigation-header,
    .${className} .navigation-header a {
      color: ${linkTitleColor};
      font-weight: 400;
    }
    .multiselect-container > li > a.multiselect-all label,
    .val-demo > span {
      font-weight: 500;
    }
    .${className} .navigation-header a:focus,
    .${className} .navigation-header a:hover {
      color: ${linkTitleHoverColor};
    }
    .${className} .navigation-header a i {
      float: none;
      margin: 0;
    }
    .${className} .badge,
    .${className} .label {
      float: right;
    }
    .${className}-icons-right > li > a,
    .${className}-icons-right > li > a.has-sub {
      padding-right: 20px;
    }
    .${className}-icons-right > li > a > i {
      float: right;
      margin-right: 0;
      margin-left: 15px;
    }
    .${className}-icons-right > li.active > .has-sub:after,
    .${className}-icons-right > li > a.has-sub:after {
      content: none;
    }
    .${className}-bordered > li {
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }
    .${className}-bordered > li:last-child {
      border-bottom: 1px solid rgba(255, 255, 255, 0);
    }
    .${className}-bordered > li.navigation-header {
      background-color: rgba(0, 0, 0, 0.1);
    }
    .${className}-bordered > li ul {
      -moz-box-shadow: none;
      -webkit-box-shadow: none;
      box-shadow: none;
    }
    .${className}-lg > li > a,
    .${className}-lg > li > a > span {
      padding-top: 14px;
      padding-bottom: 14px;
      height: 48px;
    }
    .${className}-lg > li ul li a,
    .${className}-sm > li > a,
    .${className}-sm > li > a > span {
      padding-top: 10px;
      padding-bottom: 10px;
      height: 40px;
    }
    .${className}-sm > li ul li a {
      padding-top: 6px;
      padding-bottom: 6px;
      height: 32px;
    }
    .${className}-xs > li > a,
    .${className}-xs > li > a > span {
      padding-top: 8px;
      padding-bottom: 8px;
      height: 36px;
    }
    .${className}-xs > li ul li a {
      padding-top: 6px;
      padding-bottom: 6px;
      height: 32px;
    }
  `,
);

export const navigationCollapsedClass = cssHash(
  (className) => `
    .${className} .${pageSidebarClass} {
      width: ${pageSidebarCollapsedWidth}px;
    }
    .${className} .${siteHeaderClass}-content {
      display: none;
    }
    .${className} .${navigationClass} > li > a {
      display: block;
      text-align: center;
      padding-left: 0;
      padding-right: 0;
    }
    .${className} .${navigationClass} > li > a > span {
      display: none;
      position: absolute;
      top: 0;
      right: -260px;
      background-color: ${linkSpanBgColor};
      color: ${linkSpanColor};
      border: 1px solid ${linkSpanBgColor};
      padding: 11px 20px;
      width: 260px;
      text-align: left;
      cursor: pointer;
      border-bottom-right-radius: 3px;
      border-top-right-radius: 3px;
      height: 44px;
    }
    .${className} .${navigationClass} > li > a > span .badge,
    .${className} .${navigationClass} > li > a > span .label {
      background-color: transparent;
      border-color: transparent;
      color: ${linkSpanColor};
      padding-left: 0;
      padding-right: 0;
    }
    .${className} .${navigationClass} > li > a > i {
      margin: 2px 0;
      display: block;
      float: none;
    }
    .${className} .${navigationClass} > li.active > .has-sub:after,
    .${className} .${navigationClass} > li > .has-sub:after {
      content: none;
    }
    .${className} .${navigationClass} > li .has-sub > span {
      border-radius: 0 3px 0 0;
    }
    .${className} .${navigationClass} > li.active > ul,
    .${className} .${navigationClass} > li.disabled:hover > a > span,
    .${className} .${navigationClass} > li.disabled:hover > ul {
      display: none !important;
    }
    .${className} .${navigationClass} > li:hover > ul {
      display: block !important;
    }
    .${className} .${navigationClass} > li:hover > a > span {
      display: block;
    }
    .${className} .${navigationClass} > li:hover:not(.active) > a {
      background-color: ${linkHoverBgColor};
      color: ${linkHoverColor};
    }
    .${className} .${navigationClass} > li > ul {
      position: absolute;
      right: -260px;
      top: 44px;
      width: 260px;
      display: none;
      background-color: ${subLinkMenuBgColor};
      border-left: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 0 0 3px;
    }
    .${className} .${navigationClass} > li > ul > li > a {
      padding-left: 20px;
      padding-right: 20px;
    }
    .${className} .${navigationClass} > li > ul > li > ul > li > a {
      padding-left: 30px;
    }
    .${className} .${navigationClass} > li > ul > li > ul > li > ul > li > a {
      padding-left: 60px;
    }
    .${className} .${navigationClass} > .navigation-header {
      padding: 0;
      text-align: center;
    }
    .${className} .${navigationClass} > .navigation-header > i {
      display: block;
      top: 0;
      padding: 13px 0;
    }
    .${className} .${navigationClass} > .navigation-header > span {
      display: none;
    }
    
    @media (min-width: 769px) {
      .${className} .${navigationClass}-lg > li > ul {
        top: 48px;
      }
      .${className} .${navigationClass}-sm > li > ul {
        top: 40px;
      }
      .${className} .${navigationClass}-xs > li > ul {
        top: 36px;
      }
    }
  `,
);
