import React from 'react';
import { mergeClasses } from './helpers';
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
}) => (
  <div
    className={mergeClasses(
      'DropDown_EMFQP',
      show && 'reveal-drop-down-menu_EMFQP'
    )}
    onMouseLeave={handleMouseLeave}
    onMouseOver={handleMouseOver}
    onFocus={() => {}}
    role="button"
    tabIndex={0}
  >
    {React.cloneElement(trigger, { onClick: handleClick })}

    <div className="drop-down-menu_EMFQP" style={style} ref={dropdownMenuRef}>
      {children}
    </div>
  </div>
);

export default DropDown;
