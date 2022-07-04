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
    disableAnimation,
    disableFirstAnimation,
    onDidMount = () => {},
    unmountOnExit = false,
    hideOnExit = true,
  } = props;

  let myRef = useRef();

  const didRender = useRef();
  const onProgress = useRef();

  const [showLocal, setShowLocal] = useState(show);
  const [isFirstRender, setIsFirstRender] = useState(true);

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
        if (!unmountOnExit && hideOnExit) {
          if (show && myRef.current.style.display === 'none') {
            myRef.current.style.display = '';
          }
        }
        if (show) {
          onProgress.current = false;
          setShowLocal(true);
        } else {
          if (myRef.current) {
            if (!disableAnimation) {
              onProgress.current = true;
              toggleAnimation(myRef.current, props, {
                end() {
                  if (onProgress.current) {
                    if (hideOnExit) {
                      myRef.current.style.display = 'none';
                    }
                    setShowLocal(false);
                  }
                },
              });
            } else {
              setShowLocal(false);
            }
          }
        }
      } else {
        if (!unmountOnExit && !show && hideOnExit) {
          myRef.current.style.display = 'none';
        }
      }
    },
    // eslint-disable-next-line
    [show],
  );

  useLayoutEffect(
    () => {
      if (didRender.current) {
        if (!disableAnimation && showLocal) {
          if (hideOnExit) {
            myRef.current.style.display = '';
          }
          if (isFirstRender) {
            setIsFirstRender(false);
            if (!disableFirstAnimation) {
              toggleAnimation(myRef.current, props);
            }
          } else {
            toggleAnimation(myRef.current, props);
          }
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
