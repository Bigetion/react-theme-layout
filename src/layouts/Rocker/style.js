import { cssHash } from 'css-hash';

export const mobileWidth = 767;

const headerHeight = 60;
const headerBg = '#FFFFFF';

const toggleMenuBg = '#FFFFFF';
const toggleMenuColor = '#223035';
const toggleMenuHoverBg = '#F1F1F1';
const toggleMenuHoverColor = '#223035';

const sidebarWidth = 280;
const sidebarBg = '#2C365A';

const contentPadding = 0;

const brandLogoBg = '#2C365A';
const brandLogoColor = '#FFFFFF';
const brandLogoBorderBottom = '1px solid #212B4F';

const footerBg = '#F9F9F9';

const navigationItemBg = '#424C70';
const navigationItemColor = '#FFFFFF';
const navigationSubItemBg = '#212B4F';
const navigationSubItemColorHoverActive = '#FFC502';
const navigationItemBorderBottom = '0px solid #252F54';
const navigationSubItemBorderTop = '0px solid #252F54';
const navigationSubItemLeftPadWidth = 3;

export const layoutClass = cssHash(
  (className) => `
    .${className} {
      width:100%;
      position: relative;
    }
  `,
);

export const sidebarClass = cssHash(
  (className) => `
    .${className} {
      background-color: ${sidebarBg};
      position: fixed;
      top: 0px;
      left: 0px;
      z-index: 1000;
      overflow: hidden;
      width: ${sidebarWidth}px;
      height: 100%;
      -webkit-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      transition: all 0.3s ease;
    }
    .${layoutClass}-collapsed .${className} {
      position: fixed;
      left: -${sidebarWidth}px;
    }
    @media only screen and (max-width: ${mobileWidth}px) {
      .${className} {
        position: fixed;
        top: 0px;
        left: -${sidebarWidth}px;
        z-index: 1000;
        overflow-y: auto;
        width: ${sidebarWidth}px;
        height: 100%;
        -webkit-transition: all 0.2s ease;
        -moz-transition: all 0.2s ease;
        -o-transition: all 0.2s ease;
        transition: all 0.2s ease;
      }
      .${layoutClass}-collapsed .${className} {
        position: fixed;
	      top: 0px;
        left: 0px;
      }
    }
  `,
);

export const contentClass = cssHash(
  (className) => `
    .${className} {
      margin-left: ${sidebarWidth}px;
      padding-top: ${headerHeight + contentPadding}px;
      padding-left: ${contentPadding}px;
      padding-right: ${contentPadding}px;
      padding-bottom: ${headerHeight + contentPadding}px;
      overflow-x: hidden;
      -webkit-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      transition: all 0.3s ease;
    }
    .${layoutClass}-collapsed .${className} {
      margin-left: 0;
    }
    @media only screen and (max-width: ${mobileWidth}px) {
      .${className} {
        margin-left: 0px;
      }
    }
  `,
);

export const brandLogoClass = cssHash(
  (className) => `
    .${className} {
      background-color: ${brandLogoBg};
      color: ${brandLogoColor};
      border-bottom: ${brandLogoBorderBottom};
      width: 100%;
      height: ${headerHeight}px;
      display: flex;
      align-items: center;
    }
    @media only screen and (max-width: ${mobileWidth}px) {
      .${className} {
        padding: 0px 10px 0 5px;
      }
    }
  `,
);

export const headerClass = cssHash(
  (className) => `
    .${className} {
      width: 100%;
      height: ${headerHeight}px;
      background-color: ${headerBg};
      z-index: 999;
      position: fixed;
      top: 0;
      -moz-box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
      -webkit-box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .${className} ul {
      display: flex;
      -ms-flex-direction: column;
      flex-direction: column;
      padding-left: 0;
      list-style: none;
    }
    .${className}-mobile-menu {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: ${sidebarWidth}px;
      font-size: inherit;
      font-weight: 600;
      background-color: ${toggleMenuBg};
      color: ${toggleMenuColor};
      cursor: pointer;
      -webkit-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      transition: all 0.3s ease;
      height: ${headerHeight}px;
      padding: 0 20px;
    }
    .${className}-mobile-menu:hover {
      background-color: ${toggleMenuHoverBg};
      color: ${toggleMenuHoverColor};
    }
    .${layoutClass}-collapsed .${className}-mobile-menu {
      margin-left: 0px;
    }
    @media only screen and (max-width: ${mobileWidth}px) {
      .${className}-mobile-menu {
        margin-left: 0px;
      }
    }
  `,
);

export const footerClass = cssHash(
  (className) => `
    .${className} {
      bottom: 0px;
      color: #272727;
      text-align: center;
      padding: 12px 30px;
      position: absolute;
      right: 0;
      left: 240px;
      background-color: ${footerBg};
      border-top: 1px solid rgb(223, 223, 255);
      -webkit-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      transition: all 0.3s ease; 
    }
    .${layoutClass}-collapsed .${className} {
      position: absolute;
      left: 0px;
    }
    @media only screen and (max-width: ${mobileWidth}px) {
      .${className} {
        position: absolute;
        left: 0px;
      }
    }
  `,
);

export const overlayClass = cssHash(
  (className) => `
    @media only screen and (max-width: ${mobileWidth}px) {
      .${layoutClass}-collapsed .${className} {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1000;
        background-color: #000000;
        opacity: 0.4;
        z-index: 999;
        display: block;
      }
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
      border-bottom: ${navigationItemBorderBottom};
    }
    ul.${className} li a {
      color: ${navigationItemColor};
      display: block;
      padding: 15px 20px;
      text-decoration: none;
    }
    ul.${className} > li.active > a,
    ul.${className} > li > a:hover,
    ul.${className} > li > a:focus {
      background-color: ${navigationItemBg};
      color: ${navigationItemColor};
    }
    ul.${className} > li:hover > a {
      color: ${navigationItemColor};
    }
    ul.${className} ul > li > a:hover,
    ul.${className} ul > li > a:focus,
    ul.${className} ul > li.has-sub.active > a {
      background-color: transparent;
      color: ${navigationSubItemColorHoverActive};
    }
    ul.${className} ul > li > a {
      color: ${navigationItemColor};
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
      background-color: ${navigationSubItemBg};
      overflow: hidden;
    }
    ul.${className} li ul li {
      border-top: ${navigationSubItemBorderTop};
    }
    ul.${className} > li > ul > li:before {
      background-color: transparent;
      content: "";
      font-weight: 400;
      height: 18px;
      left: 30px;
      position: absolute;
      top: 13px;
      width: ${navigationSubItemLeftPadWidth}px;
      z-index: 2;
    }
    ul.${className} li ul li.active span.title {
      font-weight: 500;
    }
    ul.${className} li ul li.active:before,
    ul.${className} li ul li:hover:before {
      background-color: ${navigationSubItemColorHoverActive};
    }
    ul.${className} li ul li.active > a,
    ul.${className} li ul li.has-sub.active > a:before,
    ul.${className} li ul li.has-sub:hover > a:before,
    ul.${className} li ul li.has-sub > a:focus:before {
      color: ${navigationSubItemColorHoverActive};
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
      color: ${navigationItemColor};
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
    ul.${className} li.has-sub > a:hover:before,
    ul.${className} > li > a:focus:before {
      color: #FFFFFF;
    }    
  `,
);
