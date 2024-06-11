'use client';

import { useEffect, useReducer } from 'react';

import { ESort } from '@/enums/sort';
import Product from '@/components/product/product';
import Sort from '@/components/sort/sort';
import Tag from '@/components/tag/tag';

import { ProductsProps } from './products.props';
import styles from './products.module.css';
import { EHtag } from '@/enums/htag';
import { EColor } from '@/enums/color';
import Htag from '../htag/htag';
import { sortReducer } from './sort.reducer';

export default function Products({ products, title }: ProductsProps) {
  const [{ products: sortedProducts, sort, isOrderDesc }, dispatchSort] =
    useReducer(sortReducer, {
      products,
      sort: ESort.Rating,
      isOrderDesc: true,
    });

  const setSort = (sort: ESort, isOrderAsc: boolean) => {
    dispatchSort({ type: sort, payload: isOrderAsc });
  };

  useEffect(() => {
    dispatchSort({ type: ESort.Rating, payload: true });
  }, [products]);

  return (
    <>
      <div className={styles.title}>
        <Htag tag={EHtag.H1}>{title}</Htag>
        <Tag color={EColor.Grey} aria-label={products.length + 'элементов'}>
          {products.length}
        </Tag>
        <Sort sort={sort} isOrderDesc={isOrderDesc} setSort={setSort} />
      </div>
      <div role="list">
        {sortedProducts.map((p) => (
          <Product role="listitem" key={p._id} product={p} layout />
        ))}
      </div>
    </>
  );
}
