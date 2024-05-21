import { EArrDirection } from '@/enums/arr-direction';
import { EView } from '@/enums/view';
import { ButtonHTMLAttributes } from 'react';

export default interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  view?: EView;
  arrow?: EArrDirection;
}
