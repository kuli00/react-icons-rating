export interface Icon {
  path: string;
  viewBox: string;
}

export interface SingleStarProps {
  size: number;
  starId: string;
  fillColor: string;
  strokeColor: string;
  fillPercent: number;
  strokeWidth: number;
  background: string;
  direction: 'row' | 'column';
  icon: Icon;
}

export interface RatingStarsProps {
  numOfStars: number;
  rating: number;
  starPadding?: number;
  size?: number;
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  direction?: 'row' | 'column';
  customIcon?: Icon;
  backgroundColor?: string;
}
