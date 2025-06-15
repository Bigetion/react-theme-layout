import { cssHash } from 'css-hash';

const sidebarWidth = 230;
const sidebarLogoColor = '#FFF';
const sidebarLogoBorderBottom = '1px dashed #2E51BB';

const appBgColor = '#1C3FAA';
const contentBgColor = '#F1F5F8';

const linkBgColor = '#1C3FAA';
const linkHoverBgColor = '#3151BC';
const linkActiveBgColor = '#F1F5F8';

const linkColor = '#FFF';
const linkHoverColor = '#FFF';
const linkActiveColor = '#B45309';

const subLinkMenuBgColor = '#1A389F';
const subLinkBgColor = '#1A389F';
const subLinkHoverBgColor = '#1A389F';
const subLinkActiveBgColor = '#1A389F';

const subLinkColor = 'rgba(255, 255, 255, 0.75)';
const subLinkHoverColor = '#FFF';
const subLinkActiveColor = '#FCD34D';

export const mobileWidth = 767;

export const appClass = cssHash(
  (className) => `
    .${className} {
      padding: 1.25rem;
      background-color: ${appBgColor};
    }
    @media screen and (max-width: ${mobileWidth}px) {
      .${className} {
        padding: 0.75rem;
      }
    }
 `,
);

export const appContainerClass = cssHash(
  (className) => `
    .${className} {
      display: flex;
    }
    @media screen and (max-width: ${mobileWidth}px) {
      .${className} {
        display: block;
        height: auto;
      }
    }
 `,
);

export const sideNavClass = cssHash(
  (className) => `
    .${className} {
      width: ${sidebarWidth}px;
      overflow-x: hidden;
      padding-right: 1.25rem;
      padding-bottom: 4rem;
    }
    @media screen and (max-width: ${mobileWidth}px) {
      .${className} {
        width: 100%;
        padding-right: 0;
        padding-bottom: 1.25rem;
      }
    }
  `,
);

export const sideNavHeaderClass = cssHash(
  (className) => `
    .${className} {
      display: flex;
      align-items: center;
      color: ${sidebarLogoColor};
      margin-bottom: 1rem;
      border-bottom: ${sidebarLogoBorderBottom};
      position: relative;
      z-index: 1;
      font-size: 24px;
      padding-bottom: 5px;
    }
      
    @media screen and (max-width: ${mobileWidth}px) {
      .${className} {
        padding-bottom: 5px;
      }
    }
  `,
);

export const sideNavLogoClass = cssHash(
  (className) => `
    .${className} {
      flex: 1;
      padding: 1rem 1.25rem;
      padding-bottom: 1.25rem;
    }
  `,
);

export const mobileMenuClass = cssHash(
  (className) => `
    .${className} {
      padding: 20px;
      cursor: pointer;
      display: none;
      border-radius: 1rem;
    }
    .${className}:hover {
      background: #1A389F;
    }
    @media screen and (max-width: ${mobileWidth}px) {
      .${className} {
        display: block;
      }
    }
  `,
);

export const contentClass = cssHash(
  (className) => `
    .${className} {
      border-radius: 30px;
      padding: 0 22px;
      background-color: ${contentBgColor};
      flex: 1 1 0%;
      min-height: 100vh;
      min-width: 0;
      padding-bottom: 2.5rem;
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
      font-weight: 500;
    }
    .${className} li a {
      background-color: ${linkBgColor};
      color: ${linkColor};
      display: block;
      text-decoration: none;
      cursor: pointer;
      font-size: 14px;;
    }
    .${className} li a:focus,
    .${className} li a:hover {
      background-color: ${linkHoverBgColor};
      color: ${linkHoverColor};
    }
    .${className} li a > .menu-icon {
      display: inline-flex;
      float: left;
      top: 0;
      margin-right: 15px;
    }
    .${className} li a > .menu-icon.pull-right {
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
    .${className} li > .has-sub > .collapse-icon {
      display: inline-flex;
      position: absolute;
      right: 20px;
    }
    .${className} li > .has-sub.active {
      color: ${subLinkActiveColor}; 
    }
    .${className} > li > a {
      border-radius: 9999px;
      display: flex;
      align-items: center;
      margin-bottom: 0.25rem;
      padding: 0.75rem 0 0.75rem 1.25rem;
      position: relative;
      z-index: 1;
    }
    .${className} > li.active > a,
    .${className} > li.active > a:focus,
    .${className} > li.active > a:hover {
      background-color: ${linkActiveBgColor};
      color: ${linkActiveColor};
      z-index: 0;
    }
    .${className} > li.active > a > .box {
      position: absolute;
      top: 0;
      right: -1.25rem;
      width: 3.5rem;
      height: 100%;
      background-color: ${linkActiveBgColor};
    }
    .${className} > li.active > a > .round-before,
    .${className} > li.active > a > .round-after {
      position: absolute;
      right: -1.25rem;
      width: 30px;
      height: 30px;
    }
    .${className} > li.active > a > .round-before {
      top: -30px;
    }
    .${className} > li.active > a > .round-after {
      bottom: -30px;
    }
    .${className} > li.active > a > .round-before .round-radius,
    .${className} > li.active > a > .round-after .round-radius {
      width: 100%;
      height: 100%;
      background-color: ${appBgColor};
    }
    .${className} > li.active > a > .round-before .round-radius {
      border-bottom-right-radius: 30px;
    }
    .${className} > li.active > a > .round-after .round-radius {
      border-top-right-radius: 30px;
    }
    .${className} > li.active > a > .round-before .round-content,
    .${className} > li.active > a > .round-after .round-content {
      width: 100%;
      height: 100%;
      background-color: ${linkActiveBgColor};
    }
    .${className} > li.active > a > [class*='text-'] {
      color: ${linkActiveColor};
    }
    .${className} > li ul {
      list-style: none;
      margin: 0;
      padding: 0;
      background-color: ${subLinkMenuBgColor};
      border-radius: 1rem;
      margin-bottom: 0.25rem;
      position: relative;
      z-index: 1;
    }
    .${className} > li ul li a {
      background-color: ${subLinkBgColor};
      color: ${subLinkColor};
      padding: 10px 20px 10px 51px;
      min-height: 40px;
      display: flex;
      align-items: center;
    }
    .${className} > li ul li a:focus,
    .${className} > li ul li a:hover {
      background-color: ${subLinkHoverBgColor};
      color: ${subLinkHoverColor};
    }
    .${className} > li > ul > li > ul > li > a {
      padding-left: 71px;
    }
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
    .${className}-icons-right > li > a,
    .${className}-icons-right > li > a.has-sub {
      padding-right: 20px;
    }
    .${className}-icons-right > li > a > .menu-icon {
      display: inline-flex;
      float: right;
      margin-right: 0;
      margin-left: 15px;
    }

    @media screen and (max-width: ${mobileWidth}px) {
      .${className} > li.active > a > .box {
        display: none;
      }
      .${className} > li.active > a > .round-before,
      .${className} > li.active > a > .round-after {
        display: none;
      }
    }
  `,
);
