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
