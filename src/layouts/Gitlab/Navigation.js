import React from 'react';
import { classNames } from 'css-hash';

import Popper from 'components/Popper';

import { sidebarNavigationClass } from './style';

import menus from './menus';

function ItemLink(props) {
  const { icon, title = '' } = props;
  return (
    <a>
      {icon && <span className="nav-item-icon">{icon}</span>}
      <span className="nav-item-name">{title}</span>
    </a>
  );
}

function Item(props) {
  const { children = [] } = props;
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
            <ItemLink {...props} />
            {open && (
              <div ref={popperRef} {...attributes.popper} className="sub-menu">
                <ul>
                  {children.map((item, index) => (
                    <li key={index}>
                      <a>{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        )}
      </Popper>
    );
  }
  return (
    <li>
      <ItemLink {...props} />
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
