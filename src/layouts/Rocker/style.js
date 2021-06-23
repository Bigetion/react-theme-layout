import { cssHash } from 'css-hash';

export const mobileWidth = 767;

const headerHeight = 60;
const headerBgColor = '#FFFFFF';

const toggleMenuBgColor = '#FFFFFF';
const toggleMenuColor = '#223035';
const toggleMenuHoverBgColor = '#F1F1F1';
const toggleMenuHoverColor = '#223035';

const sidebarWidth = 280;
const sidebarBgColor = '#2C365A';

const contentPadding = 0;

const brandLogoBgColor = '#2C365A';
const brandLogoColor = '#FFFFFF';
const brandLogoBorderBottom = '1px solid #212B4F';

const footerBgColor = '#F9F9F9';

const linkBgColor = '#2C365A';
const linkHoverBgColor = '#424C70';
const linkActiveBgColor = '#424C70';

const linkColor = '#FFFFFF';
const linkHoverColor = '#FFFFFF';
const linkActiveColor = '#FFFFFF';

const subLinkMenuBgColor = '#212B4F';
const subLinkBgColor = '#212B4F';
const subLinkHoverBgColor = '#212B4F';
const subLinkActiveBgColor = '#212B4F';

const subLinkColor = '#E5E4EA';
const subLinkHoverColor = '#FFC502';
const subLinkActiveColor = '#FFC502';

const linkBorderBottom = '0px solid #252F54';
const subLinkItemBorderTop = '0px solid #252F54';
const subLinkLeftPadBgColor = '#FFC502';
const subLinkLeftPadWidth = 3;

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
      background-color: ${sidebarBgColor};
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
      background-color: ${brandLogoBgColor};
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
      background-color: ${headerBgColor};
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
      background-color: ${toggleMenuBgColor};
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
      background-color: ${toggleMenuHoverBgColor};
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
      background-color: ${footerBgColor};
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
