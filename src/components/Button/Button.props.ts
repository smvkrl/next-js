import { EButtArr } from '@/enums/EButtArr';
import { EView } from '@/enums/EView';
import { ButtonHTMLAttributes } from 'react';

export default interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  view?: EView;
  arrow?: EButtArr;
}
