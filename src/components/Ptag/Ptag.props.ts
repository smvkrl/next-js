import { ESize } from '@/enums/size';
import { HTMLAttributes } from 'react';

export default interface PtagProps
  extends HTMLAttributes<HTMLParagraphElement> {
  size?: ESize;
}
