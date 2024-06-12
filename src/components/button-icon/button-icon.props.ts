import { ButtonHTMLAttributes } from 'react';
import { EIconType, EIconView } from '@/enums/icon-type';

export interface ButtonIconProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  view: EIconView;
  icon: EIconType;
}
