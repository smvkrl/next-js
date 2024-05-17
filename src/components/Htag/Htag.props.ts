import { EHtag } from '@/enums/htag';
import { ReactNode } from 'react';

export interface HTagProps {
  tag: EHtag;
  children: ReactNode;
}
