import React, { ReactElement } from 'react';
import { SingleIconProps } from './types';

const SingleIcon = ({
  size,
  iconId,
  fillColor,
  strokeColor,
  fillPercent,
  strokeWidth,
  direction,
  icon,
  background,
}: SingleIconProps): ReactElement => {
  const viewBox = icon.viewBox
    .split(' ')
    .map((x, i) => {
      if (i <= 1) {
        return parseInt(x, 10) - strokeWidth;
      }
      return parseInt(x, 10) + 2 *strokeWidth;
    })
    .join(' ');

  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id={iconId}
          x1="0%"
          y1="0%"
          x2={direction === 'row' ? '100%' : '0%'}
          y2={direction === 'row' ? '0%' : '100%'}
        >
          <stop offset={fillPercent + '%'} stopColor={fillColor} />
          <stop offset={fillPercent + '%'} stopColor={background} stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        d={icon.path}
        fill={`url(#${iconId}`}
        stroke={strokeColor}
        strokeWidth={strokeWidth + 'px'}
      />
    </svg>
  )
};

export default SingleIcon;
