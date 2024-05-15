import { EColor } from '@/enums/EColor';
import { ESize } from '@/enums/ESize';
import { HTMLAttributes } from 'react';

export default interface TagProps extends HTMLAttributes<HTMLDivElement> {
  size?: ESize;
  color?: EColor;
  href?: string;
}
