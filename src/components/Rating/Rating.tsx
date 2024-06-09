'use client';

import { ForwardedRef, forwardRef, useState } from 'react';
import styles from './rating.module.css';
import RatingProps from './rating.props';
import StarIcon from './star.svg';
import { cn } from '@/helpers/class-names';

function Rating(
  { isEditable = false, rating, error, setRating, ...props }: RatingProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const [rate, setRate] = useState(rating);
  const [tempRating, setTempRating] = useState(rating);
  const ratingArray = new Array(5).fill(<></>);

  function handleClick() {
    if (isEditable && setRating) {
      setRating(tempRating);
      setRate(tempRating);
    }
  }

  function constructRating(currentRating: number) {
    const updatedArray = ratingArray.map((_, i) => {
      return (
        <span
          key={i}
          className={cn(
            styles.star,
            [styles.fill, tempRating > i],
            [styles.fill, currentRating > i],
            [styles.editable, isEditable],
          )}
          onMouseEnter={() => isEditable && setTempRating(i + 1)}
          onClick={handleClick}
          tabIndex={isEditable ? 0 : -1}
        >
          <StarIcon />
        </span>
      );
    });
    return updatedArray;
  }

  return (
    <div
      className={cn(styles.wrapper, [styles.error, Boolean(error)])}
      onMouseLeave={() => setTempRating(rate)}
      ref={ref}
      {...props}
    >
      {constructRating(tempRating)}
    </div>
  );
}
export default forwardRef(Rating);
