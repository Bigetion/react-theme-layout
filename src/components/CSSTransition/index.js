import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import cssAnimation from 'css-animation';

function toggleAnimation(node, props, callback = {}) {
  const { transitionName, animation = {} } = props;
  const {
    start: callbackStart = () => {},
    active: callbackActive = () => {},
    end: callbackEnd = () => {},
  } = callback;
  const { start = () => {}, active = () => {}, end = () => {} } = animation;

  cssAnimation(node, transitionName, {
    start() {
      start(node);
      callbackStart();
    },
    active() {
      active(node);
      callbackActive();
    },
    end() {
      end(node);
      callbackEnd();
    },
  });
}

function CSSTransition(props) {
  const {
    children,
    show,
    disabled,
    onDidMount = () => {},
    unmountOnExit = true,
  } = props;

  let myRef = useRef();

  const didRender = useRef();
  const onProgress = useRef();

  const [showLocal, setShowLocal] = useState(show);

  useEffect(
    () => {
      if (!didRender.current) {
        didRender.current = true;
        onDidMount(myRef.current);
      }
    },
    // eslint-disable-next-line
    [],
  );

  useLayoutEffect(
    () => {
      if (didRender.current) {
        if (show) {
          if (!disabled && showLocal) {
            toggleAnimation(myRef.current, props);
          }
          onProgress.current = false;
          setShowLocal(true);
        } else {
          if (myRef.current) {
            if (!disabled) {
              onProgress.current = true;
              toggleAnimation(myRef.current, props, {
                end() {
                  if (onProgress.current) {
                    setShowLocal(false);
                  }
                },
              });
            } else {
              setShowLocal(false);
            }
          }
        }
      }
    },
    // eslint-disable-next-line
    [show],
  );

  useLayoutEffect(
    () => {
      if (didRender.current) {
        if (!disabled && showLocal) {
          toggleAnimation(myRef.current, props);
        }
      }
    },
    // eslint-disable-next-line
    [showLocal],
  );

  if (unmountOnExit && !showLocal) {
    return null;
  }

  return React.cloneElement(React.Children.only(children), {
    ref: myRef,
  });
}

export default CSSTransition;
