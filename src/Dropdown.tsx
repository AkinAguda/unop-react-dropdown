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
}) => (
  <div
    className="UnopdropDown_EMFQP"
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
      }`}
      style={style}
      ref={dropdownMenuRef}
    >
      {children}
    </div>
  </div>
);

export default DropDown;
