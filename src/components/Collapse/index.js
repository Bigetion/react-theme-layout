import React, { useRef, useLayoutEffect, useState } from 'react';
import { cssHash, classNames } from 'css-hash';
import cssAnimation from 'css-animation';

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
  `,
);

function toggleAnimation(node, show, transitionName) {
  node.style.display = '';
  let height;
  return cssAnimation(node, transitionName, {
    start() {
      if (!show) {
        node.style.height = `${node.offsetHeight}px`;
      } else {
        height = node.offsetHeight;
        node.style.height = 0;
      }
    },
    active() {
      node.style.height = `${show ? height : 0}px`;
    },
    end() {
      node.style.display = show ? '' : 'none';
      node.style.height = '';
    },
  });
}

function Collapse(props) {
  const { children, open, disableAnimation, className } = props;

  let nProps = Object.assign({}, props);
  delete nProps.children;
  delete nProps.open;
  delete nProps.disableAnimation;
  delete nProps.className;
  delete nProps.ref;

  const myRef = useRef();

  const [openLocal, setOpenLocal] = useState(open);
  useLayoutEffect(
    () => {
      if (myRef.current) {
        myRef.current.style.display = open ? '' : 'none';
      }
    },
    // eslint-disable-next-line
    [],
  );

  useLayoutEffect(
    () => {
      if (myRef.current && openLocal !== open) {
        if (!disableAnimation) {
          toggleAnimation(myRef.current, open, myClassName);
        } else {
          myRef.current.style.display = open ? '' : 'none';
        }
        setOpenLocal(open);
      }
    },
    // eslint-disable-next-line
    [open],
  );

  nProps = Object.assign({}, nProps, {
    ref: myRef,
    className: classNames(myClassName, className),
  });

  if (typeof children === 'function') {
    return children(nProps);
  }

  return <div {...nProps}>{children}</div>;
}

export default Collapse;
