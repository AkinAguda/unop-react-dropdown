export interface CommonProps {
  trigger: JSX.Element;
}

export interface DropDownProps extends CommonProps {
  handleClick: (e: MouseEvent) => void;
  handleMouseOver: (e: MouseEvent) => void;
  handleMouseLeave: (e: MouseEvent) => void;
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
