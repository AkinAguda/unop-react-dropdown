import React, { useState, useRef, useEffect } from 'react';
import DropDown from './Dropdown';
import { UnopDropdownProps, DropDowndirections } from './types';
import { Utility } from './functions.module';

const UnopDropdown: React.FC<UnopDropdownProps> = ({
  trigger,
  children,
  align = DropDowndirections.RIGHT,
  onAppear,
  onDisappear,
  onDisappearStart,
  delay,
  hover,
}) => {
  const [show, setShow] = useState(false);

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dropdownWidth = useRef(0);

  const dropdownMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = dropdownMenuRef.current!;
    element.style.visibility = 'hidden';
    element.style.display = 'block';
    dropdownWidth.current = element.offsetWidth;
    element.style.display = 'none';
    element.style.visibility = 'visible';
  }, []);

  const displayMenuItem = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (timer) clearTimeout(timer.current!);
    timer.current = null;
    setShow(true);
    if (onAppear) onAppear(e);
  };

  const makeDisappear = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const timerFunc = () =>
      setTimeout(() => {
        setShow(false);
        if (onDisappear) onDisappear(e);
      }, delay || 0);
    timer.current = timerFunc();
    if (onDisappearStart) onDisappearStart(e);
  };

  const handleAction = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    if (show) {
      makeDisappear(e);
    } else {
      displayMenuItem(e);
    }
  };

  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (hover && !show) {
      handleAction(e);
    }
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (hover && show) {
      handleAction(e);
    }
  };

  return (
    <DropDown
      handleMouseOver={handleMouseOver}
      handleMouseLeave={handleMouseLeave}
      handleClick={handleAction}
      show={show}
      trigger={trigger}
      style={Utility.getStyleObject(align, dropdownWidth.current)}
      dropdownMenuRef={dropdownMenuRef}
    >
      {children}
    </DropDown>
  );
};

export { UnopDropdownProps, DropDowndirections };

export default UnopDropdown;
