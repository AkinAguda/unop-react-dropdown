export interface CommonProps {
  trigger: JSX.Element;
}

export interface DropDownProps extends CommonProps {
  handleClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  handleMouseOver: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  handleMouseLeave: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  show: boolean;
  style: React.CSSProperties;
  dropdownMenuRef: React.RefObject<HTMLDivElement>;
}

export enum DropDownDirections {
  RIGHT = 'RIGHT',
  LEFT = 'LEFT',
  CENTER = 'CENTER',
}

export interface UnopDropdownProps extends CommonProps {
  align?: DropDownDirections;
  onDisappearStart?: (e?: any) => void;
  onAppear?: (e?: any) => void;
  onDisappear?: (e?: any) => void;
  delay?: number;
  hover?: boolean;
}
