export interface CommonProps {
  trigger: JSX.Element;
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
