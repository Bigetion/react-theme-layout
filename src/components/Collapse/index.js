import React, { useEffect, useRef } from 'react';
import { cssHash } from 'css-hash';

import CSSTransition from 'components/CSSTransition';

const myClassName = cssHash(
  (className) => `
    .${className} {
      overflow: hidden;
    }
    .${className}-active {
      -webkit-transition: height 200ms ease-out;
      -o-transition: height 200ms ease-out;
      transition: height 200ms ease-out;
    }
    .${className}-icon {
      -webkit-transition: transform 200ms ease;
      -o-transition: transform 200ms ease;
      transition: transform 200ms ease;
    }
  `,
);

function Collapse(props) {
  const { children, open, disableAnimation, unmountOnExit } = props;

  const height = useRef();

  return (
    <CSSTransition
      show={open}
      unmountOnExit={unmountOnExit}
      disableAnimation={disableAnimation}
      transitionName={myClassName}
      animation={{
        start(node) {
          if (!open) {
            node.style.height = `${node.offsetHeight}px`;
          } else {
            height.current = node.offsetHeight;
            node.style.height = 0;
          }
        },
        active(node) {
          node.style.height = `${open ? height.current : 0}px`;
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
      hideOnExit={false}
      disableAnimation={disableAnimation}
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
