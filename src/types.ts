export interface Icon {
  path: string;
  viewBox: string;
}

export interface SingleIconProps {
  size: number;
  iconId: string;
  fillColor: string;
  strokeColor: string;
  fillPercent: number;
  strokeWidth: number;
  background: string;
  direction: 'row' | 'column';
  icon: Icon;
}

export interface RatingIconsProps {
  numOfIcons: number;
  rating: number;
  iconPadding?: number;
  size?: number;
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  direction?: 'row' | 'column';
  customIcon?: Icon;
  backgroundColor?: string;
}
