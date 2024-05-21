import { HTMLAttributes } from 'react';
import styles from './sidebar.module.css';
import getMenu from '@/api/get-menu';

async function Sidebar({ ...props }: HTMLAttributes<HTMLDivElement>) {
  const menu = await getMenu(0);
  return (
    <nav {...props}>
      <ul className={styles.sidebar}>
        {menu.map((item) => (
          <li key={item._id.secondCategory}>{item._id.secondCategory}</li>
        ))}
      </ul>
    </nav>
  );
}
export default Sidebar;