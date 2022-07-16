import { useState, useEffect } from 'react';
import { usePopper } from 'react-popper';

const useHover = (ref) => {
  const [value, setValue] = useState(false);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = (event) => {
    setValue(ref.contains(event.target));
  };

  useEffect(
    () => {
      const node = ref;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseover', handleMouseOut);

        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          document.removeEventListener('mouseover', handleMouseOut);
        };
      }
    },
    // eslint-disable-next-line
    [ref],
  );

  return value;
};

function Popper(props) {
  const {
    children = () => {},
    options = {},
    zIndex = 20,
    open,
    hovered,
    onClickOutside = () => {},
  } = props;

  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);

  const isHoverReferenceElement = useHover(referenceElement);
  const isHoverPopperElement = useHover(popperElement);

  const [isOpen, setIsOpen] = useState(open);

  const popper = usePopper(referenceElement, popperElement, options);

  const methods = {
    onClickListener: (event) => {
      event.preventDefault();
      setIsOpen(!isOpen);
    },
    onClickOutsideListener: (event) => {
      if (
        !referenceElement ||
        referenceElement.contains(event.target) ||
        !popperElement ||
        popperElement.contains(event.target)
      ) {
        return;
      }
      onClickOutside();
      setIsOpen(false);
    },
  };

  useEffect(() => {
    if (referenceElement) {
      referenceElement.onclick = methods.onClickListener;
    }
    if (popperElement) {
      popperElement.style.zIndex = zIndex;
    }

    document.addEventListener('mousedown', methods.onClickOutsideListener);
    document.addEventListener('touchstart', methods.onClickOutsideListener);
    return () => {
      document.removeEventListener('mousedown', methods.onClickOutsideListener);
      document.removeEventListener(
        'touchstart',
        methods.onClickOutsideListener,
      );
    };
  });

  const { attributes = {}, styles = {} } = popper;
  attributes.popper = Object.assign({}, attributes.popper, {
    style: styles.popper,
  });

  let isHover = false;
  if (hovered) {
    isHover = isHoverReferenceElement || isHoverPopperElement;
  }

  return children(
    setReferenceElement,
    setPopperElement,
    Object.assign({}, popper, {
      open: (hovered ? false : isOpen) || isHover || open,
      attributes,
      referenceElement,
      popperElement,
      close: () => {
        setIsOpen(false);
      },
    }),
  );
}

export default Popper;
