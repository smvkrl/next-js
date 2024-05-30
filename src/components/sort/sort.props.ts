import { EOrder } from '@/enums/order';
import { ESort } from '@/enums/sort';
import { HTMLAttributes } from 'react';

export interface SortProps extends HTMLAttributes<HTMLDivElement> {
  sort?: ESort;
  order?: EOrder;
  setSort?: (sort: ESort, order: EOrder) => void;
}
