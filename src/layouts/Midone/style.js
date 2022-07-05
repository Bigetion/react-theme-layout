import { cssHash } from 'css-hash';

import generateTailwindCss from 'tailwind-css-generator';

generateTailwindCss();

const sidebarWidth = 230;
export const mobileWidth = 767;

const appBgColor = '#1C3FAA';
const contentBgColor = '#F1F5F8';

const linkBgColor = '#1C3FAA';
const linkHoverBgColor = '#3151BC';
const linkActiveBgColor = '#F1F5F8';

const linkColor = '#FFF';
const linkHoverColor = '#FFF';
const linkActiveColor = '#000';

const subLinkMenuBgColor = '#1A389F';
const subLinkBgColor = '#1A389F';
const subLinkHoverBgColor = '#1A389F';
const subLinkActiveBgColor = '#1A389F';

const subLinkColor = 'rgba(255, 255, 255, 0.75)';
const subLinkHoverColor = '#FFF';
const subLinkActiveColor = '#FFF';

export const appClass = cssHash(
  (className) => `
    .${className} {
      padding: 0.75rem 2rem;
      padding-top: 1.25rem;
      padding-bottom: 1.25rem;
      background-color: ${appBgColor};
    }
    .${className}-container {
      display: flex;
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
    .${className} li a > .menu-icon {
      float: left;
      top: 0;
      margin-top: 2px;
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
      font-size: 16px;
      display: block;
      position: absolute;
      top: 50%;
      margin-top: -8px;
      right: 20px;
      line-height: 1;
    }
    .${className} > li > a {
      height: 50px;
      border-radius: 9999px;
      display: flex;
      align-items: center;
      margin-bottom: 0.25rem;
      padding-left: 1.25rem;
      position: relative;
    }
    .${className} > li.active > a,
    .${className} > li.active > a:focus,
    .${className} > li.active > a:hover {
      background-color: ${linkActiveBgColor};
      color: ${linkActiveColor};
    }
    .${className} > li.active > a:before {
      margin-top: -30px;
      transform: rotate(90deg) scale(1.04);
    }
    .${className} > li.active > a:before,
    .${className} > li.active > a:after {
      content: "";
      width: 30px;
      height: 30px;
      background-size: 100%;
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='259.51' height='259.52'%3E%3Cpath data-name='Path 143' d='M259.51 259.52c-.167-2.608.05-5.319-.19-8.211-.084-1.012-.031-2.15-.118-3.12-.113-1.25-.1-2.682-.236-4.061-.172-1.722-.179-3.757-.365-5.394-.328-2.889-.478-5.857-.854-8.61-.509-3.714-.825-7.252-1.38-10.543-.934-5.535-2.009-11.312-3.189-16.692-.855-3.9-1.772-7.416-2.752-11.2-1.1-4.256-2.394-8.149-3.687-12.381-1.1-3.615-2.366-6.893-3.623-10.493-1.3-3.739-2.917-7.26-4.284-10.7-1.708-4.295-3.674-8.078-5.485-12.023-1.145-2.493-2.5-4.932-3.727-7.387-1.318-2.646-2.9-5.214-4.152-7.518-1.716-3.16-3.517-5.946-5.274-8.873-1.692-2.818-3.589-5.645-5.355-8.334-2.326-3.542-4.637-6.581-7.039-9.848-2.064-2.809-4.017-5.255-6.088-7.828a237.651 237.651 0 00-7.292-8.589c-3.027-3.411-6.049-6.744-9.055-9.763-2.4-2.412-4.776-4.822-7.108-6.975-3-2.767-5.836-5.471-8.692-7.854-3.332-2.779-6.657-5.663-9.815-8.028-2.958-2.216-5.784-4.613-8.7-6.6-3.161-2.159-6.251-4.414-9.219-6.254-3.814-2.365-7.533-4.882-11.168-6.89-4.213-2.327-8.513-4.909-12.478-6.834-4.61-2.239-9.234-4.619-13.51-6.416-4.1-1.725-8.11-3.505-11.874-4.888-4.5-1.652-8.506-3.191-12.584-4.47-6.045-1.9-12.071-3.678-17.431-5-9.228-2.284-17.608-3.757-24.951-4.9-7.123-1.112-13.437-1.64-18.271-2.035l-2.405-.2c-1.638-.136-3.508-.237-4.633-.3A115.051 115.051 0 000 .081h259.51z' fill='%23f1f5f8'/%3E%3C/svg%3E");
      margin-right: -1.25rem;
      position: absolute;
      top: 0px;
      right: 0px;
    }
    .${className} > li.active > a:after {
      margin-top: 50px;
      transform: scale(1.04);
    }
    .${className} > li.active > a > [class*='text-'] {
      color: ${linkActiveColor};
    }
    .${className} > li ul {
      list-style: none;
      margin: 0;
      padding: 0;
      background-color: ${subLinkMenuBgColor};
      border-radius: 0.375rem;
      margin-bottom: 0.25rem;
    }
    .${className} > li ul li a {
      background-color: ${subLinkBgColor};
      color: ${subLinkColor};
      padding: 10px 20px 10px 51px;
      height: 50px;
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
      float: right;
      margin-right: 0;
      margin-left: 15px;
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
      height: 50px;
      display: flex;
      align-items: center;
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
