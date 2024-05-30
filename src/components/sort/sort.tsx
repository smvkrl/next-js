'use client';

import { SortProps } from './sort.props';
import styles from './Sort.module.css';
import SortIcon from './sort.svg';
import { cn } from '@/helpers/class-names';
import { ESort } from '@/enums/sort';
import { EOrder } from '@/enums/order';

function Sort({
  sort = ESort.Rating,
  order = EOrder.Asc,
  setSort = () => null,
  className,
  ...props
}: SortProps): JSX.Element {
  function handleSort(sort: ESort) {
    if (order == EOrder.Asc) {
      setSort(sort, EOrder.Desc);
    } else {
      setSort(sort, EOrder.Asc);
    }
  }
  return (
    <div className={cn([className, styles.sort])} {...props}>
      <div className={styles.sortName} id="sort">
        Сортировка
      </div>
      <button
        id={ESort.Rating}
        role="sort"
        onClick={() => handleSort(ESort.Rating)}
        className={cn([
          [styles.active, sort == ESort.Rating],
          [styles.reverse, order == EOrder.Desc],
        ])}
        aria-selected={sort == ESort.Rating}
        aria-labelledby="sort rating"
      >
        <SortIcon className={styles.sortIcon} />
        По рейтингу
      </button>
      <button
        id={ESort.Price}
        role="sort"
        onClick={() => handleSort(ESort.Price)}
        className={cn([
          [styles.active, sort == ESort.Price],
          [styles.reverse, order == EOrder.Desc],
        ])}
        aria-selected={sort == ESort.Price}
        aria-labelledby="sort price"
      >
        <span className={cn([[styles.reverse, order == EOrder.Desc]])}>
          <SortIcon className={styles.sortIcon} />
        </span>
        По цене
      </button>
    </div>
  );
}

export default Sort;
