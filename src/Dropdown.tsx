import React from 'react';
import { DropDownProps } from './types';
import './Dropdown.css';

const DropDown: React.FC<DropDownProps> = ({
  children,
  trigger,
  handleClick,
  handleMouseLeave,
  handleMouseOver,
  dropdownMenuRef,
  show,
  style,
  dropdownRef,
  makeDisappear,
  displayMenuItem,
  dropdownWrapperClassName,
  dropdownMenuClassName,
}) => (
  <div
    className={`UnopdropDown_EMFQP${
      dropdownWrapperClassName ? ` ${dropdownWrapperClassName}` : ''
    }`}
    onMouseLeave={handleMouseLeave}
    onMouseOver={handleMouseOver}
    onFocus={() => {}}
    role="button"
    tabIndex={0}
    ref={dropdownRef}
  >
    {React.cloneElement(trigger, { onClick: handleClick })}

    <div
      className={`drop-down-menu_EMFQP${
        show ? ' reveal-drop-down-menu_EMFQP' : ''
      }${dropdownMenuClassName ? ` ${dropdownMenuClassName}` : ''}`}
      style={style}
      ref={dropdownMenuRef}
    >
      {typeof children === 'function'
        ? children({
            show: displayMenuItem,
            hide: makeDisappear,
            open: show,
          })
        : children}
    </div>
  </div>
);

export default DropDown;
