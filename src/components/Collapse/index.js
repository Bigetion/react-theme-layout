import { useRef, useEffect, useState } from 'react';
import { cssHash } from 'css-hash';
import cssAnimation from 'css-animation';

const collapseClass = cssHash(
  (collapseClass) => `
    .${collapseClass} {
      overflow: hidden;
    }
    .${collapseClass}-active {
      -webkit-transition: height 200ms ease-out;
      -o-transition: height 200ms ease-out;
      transition: height 200ms ease-out;
    }
  `,
);

function collapseAnimation(node, show, transitionName) {
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
  const { children, open, disableAnimation } = props;

  const collapseRef = useRef();

  const [componentDidMount, setComponentDidMount] = useState(false);
  useEffect(
    () => {
      if (!componentDidMount) {
        setComponentDidMount(true);
        collapseRef.current.style.display = open ? '' : 'none';
      }
    },
    // eslint-disable-next-line
    [],
  );

  useEffect(
    () => {
      if (componentDidMount) {
        if (!disableAnimation) {
          collapseAnimation(collapseRef.current, open, collapseClass);
        }
      }
    },
    // eslint-disable-next-line
    [open],
  );

  return children({ ref: collapseRef, className: collapseClass });
}

export default Collapse;
