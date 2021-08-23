import React from 'react';

export interface CommonProps {
  trigger: JSX.Element;
  dropdownWrapperClassName?: string;
  dropdownMenuClassName?: string;
  children:
    | React.ReactNode
    | ((value: {
        show: (e?: any) => void;
        hide: (e?: any) => void;
        open: boolean;
      }) => React.ReactNode);
}

export type CustomMouseEvent =
  | MouseEvent
  | React.MouseEvent<HTMLDivElement, MouseEvent>;

export interface DropDownProps extends CommonProps {
  handleClick: (e: CustomMouseEvent) => void;
  handleMouseOver: (e: CustomMouseEvent) => void;
  handleMouseLeave: (e: CustomMouseEvent) => void;
  show: boolean;
  style: React.CSSProperties;
  dropdownMenuRef: React.RefObject<HTMLDivElement>;
  dropdownRef: React.RefObject<HTMLDivElement>;
  makeDisappear: (e?: CustomMouseEvent) => void;
  displayMenuItem: (e?: CustomMouseEvent) => void;
}

export enum DropDowndirections {
  RIGHT = 'RIGHT',
  LEFT = 'LEFT',
  CENTER = 'CENTER',
}

export interface UnopDropdownProps extends CommonProps {
  align?: DropDowndirections;
  onDisappearStart?: (e?: any) => void;
  onAppear?: (e?: any) => void;
  onDisappear?: (e?: any) => void;
  delay?: number;
  hover?: boolean;
  closeOnClickOut?: boolean;
  closeOnDropdownClicked?: boolean;
}

export interface TriggerProps {
  onClick: (e: CustomMouseEvent) => void;
  show: (e?: CustomMouseEvent | undefined) => void;
  hide: (e?: CustomMouseEvent | undefined) => void;
  open: boolean;
}
