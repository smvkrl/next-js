import { EButtArr } from '@/app/enums/EButtArr';
import { EButtView } from '@/app/enums/EButtView';
import { ButtonHTMLAttributes } from 'react';

export default interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  view?: EButtView;
  arrow?: EButtArr;
}
