import { HTMLAttributes } from 'react';

export default interface RatingProps extends HTMLAttributes<HTMLDivElement> {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
  // error: FieldError;
}
