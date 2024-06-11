'use client';

import Link from 'next/link';
import { HTMLAttributes } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/helpers/class-names';
import { ETopLevelCategory } from '@/enums/top-level-category';
import { firstLevelMenu } from '@/helpers/first-category';
import { IFirstLevelMenuItem, IPageItem } from '@/interfaces/menu.interface';
import { usePathname } from 'next/navigation';
import useMenuBuilder from '@/hooks/use-menu-builder';
import styles from './menu.module.css';

function Menu({ ...props }: HTMLAttributes<HTMLDivElement>) {
  const { firstCategory, secondCategory, menu } = useMenuBuilder(
    ETopLevelCategory.Courses,
  );

  const path = usePathname();

  function handleSetFirstCategory(item: IFirstLevelMenuItem) {
    firstCategory.set(item.id);
  }
  function handleSetSecondCategory(cat: string) {
    secondCategory.set(cat === secondCategory.get ? null : cat);
  }

  const shouldReduceMotion = useReducedMotion();
  const variants = {
    visible: {
      transition: shouldReduceMotion
        ? {}
        : {
            when: 'beforeChildren',
            staggerChildren: 0.05,
          },
    },
    hidden: {},
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      display: 'flex',
    },
    hidden: { opacity: shouldReduceMotion ? 1 : 0, display: 'none' },
  };

  function buildFirstLevel() {
    return (
      <ul className={styles.firstLevelList}>
        {firstLevelMenu.map((item) => (
          <li key={item.id}>
            <div
              className={cn(styles.firstLevel, [
                styles.firstLevelActive,
                item.id === firstCategory.get,
              ])}
              onClick={() => handleSetFirstCategory(item)}
            >
              {item.icon}
              <span>
                <Link href={`/${item.route}`}>{item.name}</Link>
              </span>
            </div>
            {item.id === firstCategory.get ? buildSecondLevel() : null}
          </li>
        ))}
      </ul>
    );
  }

  function buildSecondLevel() {
    if (!menu) {
      return null;
    }
    return (
      <ul className={styles.secondBlock}>
        {menu.map((item) => {
          const isOpened = item._id.secondCategory === secondCategory.get;
          return (
            <li key={item._id.secondCategory}>
              <button
                className={cn(styles.secondLevel, [
                  styles.secondLevelActive,
                  item._id.secondCategory === secondCategory.get,
                ])}
                onClick={() => handleSetSecondCategory(item._id.secondCategory)}
              >
                {item._id.secondCategory}
              </button>
              {buildThirdLevel(item.pages, isOpened)}
            </li>
          );
        })}
      </ul>
    );
  }

  function buildThirdLevel(pages: IPageItem[], isOpened: boolean) {
    if (!menu) {
      return null;
    }
    return (
      <motion.ul
        className={styles.thirdBlock}
        layout
        variants={variants}
        initial={isOpened ? 'visible' : 'hidden'}
        animate={isOpened ? 'visible' : 'hidden'}
      >
        {pages.map((p) => {
          const link = `/${firstLevelMenu[firstCategory.get].route}/${p.alias}`;
          return (
            <motion.li variants={variantsChildren} key={p._id}>
              <Link
                href={link}
                className={cn(styles.thirdLevel, [
                  styles.thirdLevelActive,
                  link === path,
                ])}
              >
                {p.category}
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
    );
  }

  return (
    <nav className={styles.menu} {...props}>
      {buildFirstLevel()}
    </nav>
  );
}
export default Menu;
