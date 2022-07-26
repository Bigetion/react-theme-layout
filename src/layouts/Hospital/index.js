import React from 'react';
import { classNames } from 'css-hash';

import { gradientBackgroundClass } from './style';

export default function Layout(props) {
  const { children } = props;
  return (
    <div>
      <div>
        <div></div>
        <div>
          <div></div>
          <div>{children}</div>
        </div>
      </div>
      <div className={classNames(gradientBackgroundClass)} />
    </div>
  );
}
