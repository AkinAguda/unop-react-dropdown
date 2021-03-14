import { DropDowndirections } from './types';

export module Utility {
  export const getStyleObject = (
    align: DropDowndirections,
    width: number
  ): React.CSSProperties => {
    const style: React.CSSProperties = {};
    if (align === DropDowndirections.RIGHT) {
      style.right = 0;
    } else if (align === DropDowndirections.CENTER) {
      style.left = `50%`;
      style.marginLeft = `-${width / 2}px`;
    } else {
      style.left = 0;
    }
    return style;
  };
}
