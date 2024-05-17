import { HTMLAttributes } from 'react';
import styles from './header.module.css';

function Header({ ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <header className={styles.header} {...props}>
      Header
    </header>
  );
}
export default Header;
