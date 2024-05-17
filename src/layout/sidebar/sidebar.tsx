import { HTMLAttributes } from 'react';
import styles from './sidebar.module.css';

function Sidebar({ ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <nav {...props}>
      <ul className={styles.sidebar}>
        <li>School</li>
        <li>Menu</li>
        <li>About</li>
      </ul>
    </nav>
  );
}
export default Sidebar;
