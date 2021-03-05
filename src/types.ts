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
  direction?: DropDownDirections;
  onAppearStart?: () => void;
  onDisappearStart?: () => void;
  onAppear?: () => void;
  onDisappear?: () => void;
  delay?: number;
  hover?: boolean;
}
