import { cssHash } from 'css-hash';

export const gradientBackgroundClass = cssHash(
  (className) => `
    .${className} {
      position: fixed;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgb(225,232,242);
      background: linear-gradient(349deg, rgba(225,232,242,1) 0%, rgba(252,226,224,1) 50%, rgba(216,210,252,1) 100%);
    }
  `,
);
