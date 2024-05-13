import { EButtArr } from '@/app/enums/EButtArr';
import { EView } from '@/app/enums/EView';
import { ButtonHTMLAttributes } from 'react';

export default interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  view?: EView;
  arrow?: EButtArr;
}
