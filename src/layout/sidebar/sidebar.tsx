import { HTMLAttributes } from 'react';
import Menu from '@/components/menu/menu';
import Logo from '../logo.svg';
import Link from 'next/link';
import styles from './sidebar.module.css';
import { cn } from '@/helpers/class-names';
import Search from '@/components/search/search';

function Sidebar({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={cn([styles.sidebar, className])}>
      <Link href={'/'}>
        <Logo />
      </Link>
      <Search />
      <Menu />
    </div>
  );
}

export default Sidebar;
