import { cssHash } from 'css-hash';

export const mobileWidth = 767;

const mainContainerBgColor = '#FFFFFF';

const pageSidebarWidth = 280;
const pageSidebarBgColor = '#2C365A';
const pageSidebarZIndex = 101;
const pageSidebarCollapsedWidth = 60;

const siteHeaderHeight = 60;
const siteHeaderBgColor = '#2C365A';
const siteHeaderColor = '#FFFFFF';
const siteHeaderBorderBottom = '1px solid #252F54';
const siteHeaderContentPadding = '0 20px';
const siteHeaderZIndex = 101;

const mainHeaderHeight = 60;
const mainHeaderBorderBottom = 'solid 1px #E3E1E1';
const mainHeaderContentPadding = '0 20px';

const mainContentPadding = '0px';

const mobileMenuBgHover = '#212B4F';
const collapseMenuBgHover = '#F8F8F8';

const linkBgColor = '#2C365A';
const linkHoverBgColor = '#424C70';
const linkActiveBgColor = '#424C70';
const linkSpanBgColor = '#424C70';

const linkColor = '#FFFFFF';
const linkHoverColor = '#FFFFFF';
const linkActiveColor = '#FFFFFF';
const linkSpanColor = '#FFFFFF';

const subLinkMenuBgColor = '#212B4F';
const subLinkBgColor = '#212B4F';
const subLinkHoverBgColor = '#212B4F';
const subLinkActiveBgColor = '#212B4F';

const subLinkColor = '#E5E4EA';
const subLinkHoverColor = '#FFC502';
const subLinkActiveColor = '#FFC502';

const linkBorderBottom = '0px solid #252F54';
const subLinkItemBorderTop = '0px solid #252F54';
const subLinkLeftPadWidth = 3;
const subLinkLeftPadBgColor = '#FFC502';

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
      background-color: ${siteHeaderBgColor};
      color: ${siteHeaderColor};
      overflow: hidden;
      position: relative;
      z-index: ${siteHeaderZIndex};
      display: flex;
      justify-content: space-between;
      border-bottom: ${siteHeaderBorderBottom};
      height: ${siteHeaderHeight}px;
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
      display: block;
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
    ul.${className} li i {
      margin-right: 16px;
      font-size: 15px;
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
    ul.${className} li ul li.active span.title {
      font-weight: 500;
    }
    ul.${className} li ul li:hover:before {
      background-color: ${subLinkLeftPadBgColor};
    }
    ul.${className} li ul li.active:before {
      background-color: ${subLinkLeftPadBgColor};
    }
    ul.${className} li ul li.has-sub:hover > a:before,
    ul.${className} li ul li.has-sub > a:focus:before {
      color: ${subLinkHoverColor};
    }
    ul.${className} li ul li.active > a,
    ul.${className} li ul li.has-sub.active > a:before {
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
    ul.${className} li.has-sub > a:before {
      color: ${linkColor};
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
    ul.${className} li.active.has-sub > a:before {
      -webkit-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
      -o-transform: rotate(90deg);
      transform: rotate(90deg);
      color: ${linkActiveColor};
    }
    ul.${className} li.has-sub > a:hover:before,
    ul.${className} > li > a:focus:before {
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
    
  `,
);

export const sidebarCollapsedClass = cssHash(
  (className) => `
    .${className} .${pageSidebarClass} {
      width: ${pageSidebarCollapsedWidth}px;
    }
    .${className} .${siteHeaderClass}-content {
      display: none;
    }
    .${className} .${pageSidebarClass} .${navigationClass} > li > a > span.title {
      background-color: ${linkSpanBgColor};
      color: ${linkSpanColor};
      display: block;
      left: ${pageSidebarCollapsedWidth}px;
      zoom: 1;
      opacity: 0;
      filter: alpha(opacity=0);
      padding: 15px 20px;
      position: absolute;
      top: 0;
      z-index: 2;
      visibility: hidden;
      width: ${pageSidebarWidth - pageSidebarCollapsedWidth - 20}px;
      -moz-box-shadow: 5px 0 5px -5px rgba(0, 0, 0, 0.25);
      -webkit-box-shadow: 5px 0 5px -5px rgba(0, 0, 0, 0.25);
      box-shadow: 5px 0 5px -5px rgba(0, 0, 0, 0.25);
    }
    .${className} .${pageSidebarClass} .${navigationClass} > li > a > span.label {
      left: 240px;
      zoom: 1;
      opacity: 0;
      filter: alpha(opacity=0);
      position: absolute;
      top: 15px;
      visibility: hidden;
    }
    .${className} .${pageSidebarClass} .${navigationClass} > li.has-sub:hover > a,
    .${className} .${pageSidebarClass} .${navigationClass} > li:hover > a {
      background-color: ${linkSpanBgColor};
      color: ${linkSpanColor};
    }
    .${className} .${pageSidebarClass} .${navigationClass} > li.has-sub:hover > a > span.title,
    .${className} .${pageSidebarClass} .${navigationClass} > li:hover > a > span.title,
    .${className} .${pageSidebarClass} .${navigationClass} > li:hover > a > span.label {
      visibility: visible;
      zoom: 1;
      opacity: 1;
      filter: alpha(opacity=100);
    }
    .${className} .${pageSidebarClass} .${navigationClass} > li > ul {
      display: block;
      height: 0;
      left: ${pageSidebarCollapsedWidth}px;
      zoom: 1;
      opacity: 0;
      filter: alpha(opacity=0);
      position: absolute;
      top: auto;
      visibility: hidden;
      width: 240px;
    }
    .${className} .${pageSidebarClass} .${navigationClass} > li.has-sub:hover > ul,
    .${className} .${pageSidebarClass} .${navigationClass} > li:hover > ul {
      visibility: visible;
      zoom: 1;
      opacity: 1;
      filter: alpha(opacity=100);
      height: auto;
      -moz-box-shadow: 5px 5px 5px -5px rgba(0, 0, 0, 0.25);
      -webkit-box-shadow: 5px 5px 5px -5px rgba(0, 0, 0, 0.25);
      box-shadow: 5px 5px 5px -5px rgba(0, 0, 0, 0.25);
    }
    .${className} .${pageSidebarClass} ul.${navigationClass} > li > ul > li > a {
      padding-left: 20px;
    }
    .${className} .${pageSidebarClass} ul.${navigationClass} li ul > li > ul > li > a {
      padding-left: 40px;
    }
    .${className} .${pageSidebarClass} ul.${navigationClass} li ul > li > ul > li > ul > li > a {
      padding-left: 60px;
    }
    .${className} .${pageSidebarClass} ul.${navigationClass} li ul > li > ul > li > ul > li > ul > li > a {
      padding-left: 80px;
    }
    .${className} .${pageSidebarClass} ul.${navigationClass} > li.has-sub > a:before,
    .${className} .${pageSidebarClass} ul.${navigationClass} li ul li:before,
    .${className} .${pageSidebarClass} ul.${navigationClass} li ul li:after,
    .${className} .${pageSidebarClass} ul.${navigationClass} li ul:before {
      display: none;
    }
  `,
);
