import { ESize } from '@/app/enums/ESize';
import { HTMLAttributes } from 'react';

export default interface PtagProps
  extends HTMLAttributes<HTMLParagraphElement> {
  size?: ESize;
}
