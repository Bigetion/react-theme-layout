import React from 'react';
import { classNames } from 'css-hash';

function IconContainer(props, ref) {
  const { size = 'md', className } = props;
  const nProps = Object.assign({}, props);
  delete nProps.children;
  delete nProps.icon;
  delete nProps.size;
  delete nProps.color;
  delete nProps.className;

  const sizeOptions = {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 28,
  };
  const iconSize = sizeOptions[size] || 20;

  if (!props.icon) {
    return null;
  }

  return (
    <div
      {...nProps}
      ref={ref}
      className={classNames(className, 'flex items-center justify-center')}
    >
      <props.icon size={iconSize} />
    </div>
  );
}

export default React.forwardRef(IconContainer);
