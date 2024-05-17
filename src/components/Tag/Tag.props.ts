import { EColor } from '@/enums/color';
import { ESize } from '@/enums/size';
import { HTMLAttributes } from 'react';

export default interface TagProps extends HTMLAttributes<HTMLDivElement> {
  size?: ESize;
  color?: EColor;
  href?: string;
}
