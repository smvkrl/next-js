'use client';

import { useState } from 'react';
import styles from './rating.module.css';
import RatingProps from './rating.props';
import StarIcon from './star.svg';

function Rating({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps) {
  const [rate, setRate] = useState(rating);
  const [tempRating, setTempRating] = useState(rating);
  const ratingArray = new Array(5).fill(<></>);

  // const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

  // function handleKeydown(e: KeyboardEvent) {
  //   if (!isEditable || !setRating) {
  //     return;
  //   }
  // }

  function handleClick() {
    if (isEditable && setRating) {
      setRating(tempRating);
      setRate(tempRating);
    }
  }

  function constructRating(currentRating: number) {
    const updatedArray = ratingArray.map((_, i) => {
      let cn = `${styles.star}`;
      if (tempRating) {
        cn += tempRating > i ? ` ${styles.fill}` : '';
      } else {
        cn += currentRating > i ? ` ${styles.fill}` : '';
      }
      cn += isEditable ? ` ${styles.editable}` : '';
      return (
        <span
          key={i}
          className={cn}
          // ref={(r) => ratingArrayRef.current.push(r)}
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
      className={styles.wrapper}
      onMouseLeave={() => setTempRating(rate)}
      {...props}
    >
      {constructRating(tempRating)}
    </div>
  );
}
export default Rating;
