import { ESort } from '@/enums/sort';
import { HTMLAttributes } from 'react';

export interface SortProps extends HTMLAttributes<HTMLDivElement> {
  sort?: ESort;
  isOrderDesc?: boolean;
  setSort?: (sort: ESort, order: boolean) => void;
}
