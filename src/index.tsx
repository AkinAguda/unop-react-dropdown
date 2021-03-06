import React, { useState, useRef, useEffect } from 'react';
import DropDown from './Dropdown';
import { UnopDropdownProps, DropDownDirections } from './types';

const UnopDropdown: React.FC<UnopDropdownProps> = ({
  trigger,
  children,
  align = DropDownDirections.RIGHT,
  onAppear,
  onDisappear,
  onDisappearStart,
  delay,
  hover,
}) => {
  const [show, setShow] = useState(false);

  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

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
    if (timer) clearTimeout(timer);
    setShow(true);
    if (onAppear) onAppear(e);
  };

  const makeDisappear = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const timerFunc = () =>
      setTimeout(() => {
        setShow(false);
        if (onDisappear) onDisappear(e);
      }, delay || 0);
    setTimer(timerFunc());
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

  const getStyleObject = (): React.CSSProperties => {
    const style: React.CSSProperties = {};
    if (align === DropDownDirections.RIGHT) {
      style.right = 0;
    } else if (align === DropDownDirections.CENTER) {
      style.left = `50%`;
      style.marginLeft = `-${dropdownWidth.current / 2}px`;
    } else {
      style.left = 0;
    }
    return style;
  };

  return (
    <DropDown
      handleMouseOver={handleMouseOver}
      handleMouseLeave={handleMouseLeave}
      handleClick={handleAction}
      show={show}
      trigger={trigger}
      style={getStyleObject()}
      dropdownMenuRef={dropdownMenuRef}
    >
      {children}
    </DropDown>
  );
};

export { UnopDropdownProps };

export default UnopDropdown;
