import { EArrDirection } from '@/enums/arrDirection';
import { EView } from '@/enums/view';
import { ButtonHTMLAttributes } from 'react';

export default interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  view?: EView;
  arrow?: EArrDirection;
}
