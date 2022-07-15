import React from 'react';
import { classNames } from 'css-hash';

import Popper from 'components/Popper';

import { sidebarNavigationClass } from './style';

import menus from './menus';

function Item({ title = '', children = [] }) {
  if (children.length > 0) {
    return (
      <Popper
        hovered
        options={{
          placement: 'right-start',
          strategy: 'fixed',
        }}
      >
        {(referenceRef, popperRef, { attributes, open }) => (
          <li ref={referenceRef}>
            <a>{title}</a>
            {open && (
              <ul ref={popperRef} {...attributes.popper}>
                {children.map((item, index) => (
                  <li key={index}>
                    <a>{item.title}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        )}
      </Popper>
    );
  }
  return (
    <li>
      <a>{title}</a>
    </li>
  );
}

export default function Navigation() {
  return (
    <ul className={classNames(sidebarNavigationClass)}>
      {menus.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </ul>
  );
}
