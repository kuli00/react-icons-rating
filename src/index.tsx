import React, {ReactElement} from "react";
import { v4 as uuid } from 'uuid';

import SingleIcon from './SingleIcon';
import { RatingIconsProps } from './types';
import defaultIcon  from './const';

const IconsRating = ({
  numOfIcons,
  rating,
  iconPadding = 10,
  size = 20,
  fillColor = '#ff0000',
  backgroundColor = '#ffffff',
  strokeWidth = 2,
  strokeColor,
  direction = 'row',
  customIcon = defaultIcon,
 }: RatingIconsProps): ReactElement => {
  const getFillPercent = (starNumber: number): number => {
    switch (true) {
      case starNumber <= Math.floor(rating):
        return 100;
      case starNumber - 1 > rating:
        return 0;
      default:
        return Math.abs((rating % 1) * 100);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        columnGap: `${iconPadding}px`,
        flexDirection: direction,
      }}
      title={`${rating} / ${numOfIcons}`}
    >
      {new Array(numOfIcons).fill(null).map((_, key) => (
        <SingleIcon
          size={size}
          iconId={uuid()}
          fillColor={fillColor}
          strokeColor={strokeColor || fillColor}
          fillPercent={getFillPercent(key + 1)}
          strokeWidth={strokeWidth}
          direction={direction}
          icon={customIcon}
          background={backgroundColor}
        />
      ))}
    </div>
  );
}

export default IconsRating;