// import React, { FC, HTMLAttributes, ReactChild } from 'react';

// import * from './Dropdown';

// export interface Props extends HTMLAttributes<HTMLDivElement> {
//   /** custom content, defaults to 'the snozzberries taste like snozzberries' */
//   children?: ReactChild;
// }

// // Please do not use types off of a default export module or else Storybook Docs will suffer.
// // see: https://github.com/storybookjs/storybook/issues/9556
// /**
//  * A custom Thing component. Neat!
//  */
// export const Thing: FC<Props> = ({ children }) => {
//   return <div>{children || `the snozzberries taste like snozzberries`}</div>;
// };

import React, { useState } from 'react';
import DropDown from './Dropdown';
import { DropDownContainerProps, DropDownDirections } from './types';

export const DropDownContainer: React.FC<DropDownContainerProps> = ({
  trigger,
  children,
  direction = DropDownDirections.RIGHT,
  onAppear,
  onDisappear,
  onAppearStart,
  onDisappearStart,
  delay,
  hover,
}) => {
  const [show, setShow] = useState(false);

  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const displayMenuItem = () => {
    if (timer) clearTimeout(timer);
    if (onAppearStart) onAppearStart();
    setShow(true);
    if (onAppear) onAppear();
  };

  const makeDisappear = () => {
    const timerFunc = () =>
      setTimeout(() => {
        setShow(false);
        if (onDisappear) onDisappear();
      }, delay || 0);
    setTimer(timerFunc());
    if (onDisappearStart) onDisappearStart();
  };

  const handleAction = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    if (show) {
      makeDisappear();
    } else {
      displayMenuItem();
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
    if (direction === DropDownDirections.RIGHT) {
      style.right = 0;
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
    >
      {children}
    </DropDown>
  );
};
