'use client';

import styles from './menu.module.css';
import { firstLevelMenu } from '@/helpers/first-category';
import { PageItem } from '@/interfaces/menu.interface';
import useMenuBuilder from '@/hooks/use-menu-builder';
import { HTMLAttributes, useState } from 'react';

function Menu({ ...props }: HTMLAttributes<HTMLDivElement>) {
  const { menu, category, setCategory } = useMenuBuilder();
  const [secondCategory, setSecondCategory] = useState<string | null>(null);

  function handleSetSecondCategory(cat: string) {
    if (cat === secondCategory) {
      setSecondCategory(null);
    } else {
      setSecondCategory(cat);
    }
  }

  function buildFirstLevel() {
    return (
      <ul className={styles.firstLevelList}>
        {firstLevelMenu.map((item) => (
          <li key={item.id}>
            <div
              className={styles.firstLevel}
              onClick={() => setCategory(item.id)}
            >
              {item.icon}
              <span>{item.name}</span>
            </div>
            {item.id === category ? buildSecondLevel() : ''}
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
        {menu.map((item) => (
          <li key={item._id.secondCategory}>
            <button
              className={styles.secondLevel}
              onClick={() => handleSetSecondCategory(item._id.secondCategory)}
            >
              {item._id.secondCategory}
            </button>
            {item._id.secondCategory === secondCategory
              ? buildThirdLevel(item.pages)
              : ''}
          </li>
        ))}
      </ul>
    );
  }

  function buildThirdLevel(pages: PageItem[]) {
    if (!menu) {
      return null;
    }
    return (
      <ul>
        {pages.map((p) => (
          <li key={p._id}>
            <a href={`/${p.alias}`} className={styles.thirdLevel}>
              {p.category}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <nav className={styles.menu} {...props}>
      {buildFirstLevel()}
    </nav>
  );
}
export default Menu;