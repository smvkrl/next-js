import { EColor } from '@/app/enums/EColor';
import { ESize } from '@/app/enums/ESize';
import { HTMLAttributes } from 'react';

export default interface TagProps extends HTMLAttributes<HTMLDivElement> {
  size?: ESize;
  color?: EColor;
  href?: string;
}
