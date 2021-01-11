import { cssHash } from 'css-hash';

export const mobileWidth = 767;

const mainContainerBg = '#FFFFFF';

const pageSidebarWidth = 280;
const pageSidebarBg = '#F8F8F8';
const pageSidebarColor = '#252525';
const pageSidebarZIndex = 101;
const pageSidebarCollapsedWidth = 66;

const siteHeaderHeight = 60;
const siteHeaderBg = '#F8F8F8';
const siteHeaderColor = '#000000';
const siteHeaderBorderBottom = 'solid 1px #E3E1E1';
const siteHeaderContentPadding = '0 20px';
const siteHeaderZIndex = 101;

const mainHeaderHeight = 60;
const mainHeaderBorderBottom = 'solid 1px #E3E1E1';
const mainHeaderContentPadding = '0 20px';

const mainContentPadding = '0px';

const mobileMenuBgHover = '#F0F0F0';
const collapseMenuBgHover = '#F8F8F8';

const primaryColor = '#6059EE';
const secondaryColor = '#EC407A';

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
      background-color: ${mainContainerBg};
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
      background-color: ${pageSidebarBg};
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
      background-color: ${siteHeaderBg};
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
    ul.${className} li a {
      color: #252525;
      display: block;
      padding: 15px 20px;
      text-decoration: none;
    }
    ul.${className} > li.active > a, ul.${className} > li > a:hover, ul.${className} > li > a:focus {
      background-color: ${primaryColor};
      color: #FFFFFF;
    }
    ul.${className} > li:hover > a {
      color: #FFFFFF;
    }
    ul.${className} .nav > li > a:hover, ul.${className} .nav > li > a:focus, ul.${className} .nav > li.has-sub.active > a {
      background-color: transparent;
      color: ${secondaryColor};
    }
    ul.${className} .nav > li > a {
      color: #252525;
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
      background-color: #FFFFFF;
      overflow: hidden;
    }
    ul.${className} > li > ul > li:before {
      background-color: transparent;
      color: #2f2e2e;
      content: "";
      font-weight: 400;
      height: 18px;
      left: 30px;
      position: absolute;
      top: 13px;
      width: 3px;
      z-index: 2;
    }
    ul.${className} li ul li.active span.title {
      font-weight: 500;
    }
    ul.${className} li ul li.active:before, ul.${className} li ul li:hover:before {
      background-color: ${secondaryColor};
    }
    ul.${className} li ul li.active > a, ul.${className} li ul li.has-sub.active > a:before, ul.${className} li ul li.has-sub:hover > a:before, ul.${className} li ul li.has-sub > a:focus:before {
      color: ${secondaryColor};
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
      color: #252525;
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
      color: #FFFFFF;
    }
    ul.${className} li.has-sub > a:hover:before, ul.${className} > li > a:focus:before {
      color: #FFFFFF;
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
      background-color: ${primaryColor};
      display: block;
      left: ${pageSidebarCollapsedWidth}px;
      zoom: 1;
      opacity: 0;
      filter: alpha(opacity=0);
      padding: 15px 20px;
      position: absolute;
      top: 0;
      visibility: hidden;
      width: 200px;
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
      background-color: ${primaryColor};
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
      -moz-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
      -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
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
