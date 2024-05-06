import { EHtag } from '@/app/enums/EHtag';
import { ReactNode } from 'react';

export interface HTagProps {
  tag: EHtag;
  children: ReactNode;
}
