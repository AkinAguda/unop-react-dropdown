export interface CommonProps {
  trigger: JSX.Element;
}

export interface DropDownProps extends CommonProps {
  handleClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  handleMouseOver: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  handleMouseLeave: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  show: boolean;
  style: React.CSSProperties;
}

export enum DropDownDirections {
  RIGHT,
  LEFT,
}

export interface DropDownContainerProps extends CommonProps {
  direction?: DropDownDirections;
  onAppearStart?: () => void;
  onDisappearStart?: () => void;
  onAppear?: () => void;
  onDisappear?: () => void;
  delay?: number;
  hover?: boolean;
}
