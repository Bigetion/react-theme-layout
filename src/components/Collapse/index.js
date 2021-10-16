import React, { useEffect, useRef } from 'react';
import { cssHash } from 'css-hash';

import CSSTransition from 'components/CSSTransition';

const myClassName = cssHash(
  (className) => `
    .${className} {
      overflow: hidden;
    }
    .${className}-active {
      -webkit-transition: height 100ms ease-out;
      -o-transition: height 100ms ease-out;
      transition: height 100ms ease-out;
    }
    .${className}-icon {
      -webkit-transition: transform 100ms ease;
      -o-transition: transform 100ms ease;
      transition: transform 100ms ease;
    }
  `,
);

function Collapse(props) {
  const { children, open, disableAnimation } = props;

  let height;
  return (
    <CSSTransition
      show={open}
      disabled={disableAnimation}
      transitionName={myClassName}
      animation={{
        start(node) {
          if (!open) {
            node.style.height = `${node.offsetHeight}px`;
          } else {
            height = node.offsetHeight;
            node.style.height = 0;
          }
        },
        active(node) {
          node.style.height = `${open ? height : 0}px`;
        },
        end(node) {
          node.style.height = '';
        },
      }}
    >
      {children}
    </CSSTransition>
  );
}

function CollapseIcon(props) {
  const { children, open, disableAnimation, rotate = 90 } = props;

  const myRef = useRef();
  const didMount = useRef();

  useEffect(
    () => {
      if (disableAnimation && didMount.current) {
        myRef.current.style.transform = `rotate(${open ? rotate : 0}deg)`;
      }
    },
    // eslint-disable-next-line
    [open],
  );

  return (
    <CSSTransition
      show={open}
      unmountOnExit={false}
      disabled={disableAnimation}
      transitionName={`${myClassName}-icon`}
      onDidMount={(node) => {
        myRef.current = node;
        didMount.current = true;
        node.style.transform = `rotate(${open ? rotate : 0}deg)`;
      }}
      animation={{
        start(node) {
          node.style.transform = `rotate(${open ? rotate : 0}deg)`;
        },
      }}
    >
      {children}
    </CSSTransition>
  );
}

Collapse.Icon = CollapseIcon;

export default Collapse;
