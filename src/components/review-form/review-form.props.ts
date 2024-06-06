import { HTMLAttributes } from 'react';

export interface ReviewFormProps extends HTMLAttributes<HTMLDivElement> {
  productId: string;
  isOpened: boolean;
}
