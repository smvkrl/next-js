'use client';

import { SortProps } from './sort.props';
import styles from './Sort.module.css';
import SortIcon from './sort.svg';
import { cn } from '@/helpers/class-names';
import { ESort } from '@/enums/sort';

function Sort({
  sort = ESort.Rating,
  isOrderDesc = true,
  setSort = () => null,
  className,
  ...props
}: SortProps): JSX.Element {
  function handleSort(type: ESort) {
    if (type == sort) {
      setSort(type, !isOrderDesc);
    } else {
      setSort(type, true);
    }
  }
  return (
    <div className={cn(className, styles.sort)} {...props}>
      <div className={styles.sortName} id="sort">
        Сортировка
      </div>
      <button
        id={ESort.Rating}
        onClick={() => handleSort(ESort.Rating)}
        className={cn(
          [styles.active, sort == ESort.Rating],
          [styles.reverse, !isOrderDesc],
        )}
        role="sort"
        aria-selected={sort == ESort.Rating}
        aria-labelledby="sort rating"
      >
        <SortIcon className={styles.sortIcon} />
        По рейтингу
      </button>
      <button
        id={ESort.Price}
        onClick={() => handleSort(ESort.Price)}
        className={cn(
          [styles.active, sort == ESort.Price],
          [styles.reverse, !isOrderDesc],
        )}
        role="sort"
        aria-selected={sort == ESort.Price}
        aria-labelledby="sort price"
      >
        <SortIcon className={styles.sortIcon} />
        По цене
      </button>
    </div>
  );
}

export default Sort;
