'use client';

import { HTMLAttributes, useEffect, useState } from 'react';
import { cn } from '@/helpers/class-names';
import styles from './header.module.css';
import Logo from '../logo.svg';
import ButtonIcon from '@/components/button-icon/button-icon';
import { EIconType, EIconView } from '@/enums/icon-type';
import { motion, useReducedMotion } from 'framer-motion';
import Sidebar from '../sidebar/sidebar';
import { usePathname } from 'next/navigation';

function Header({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const shouldReduceMotion = useReducedMotion();
  const path = usePathname();

  useEffect(() => {
    setIsOpened(false);
  }, [path]);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,
      },
    },
    closed: {
      opacity: shouldReduceMotion ? 1 : 0,
      x: '100%',
    },
  };

  const handleOpenMenu = () => {
    setIsOpened(true);
  };

  const handleCloseMenu = () => {
    setIsOpened(false);
  };

  return (
    <header className={cn(styles.header, className)} {...props}>
      <Logo />
      <ButtonIcon
        view={EIconView.White}
        icon={EIconType.Menu}
        onClick={handleOpenMenu}
      />
      <motion.div
        className={styles.mobileMenu}
        variants={variants}
        initial={'closed'}
        animate={isOpened ? 'opened' : 'closed'}
      >
        <Sidebar />
        <ButtonIcon
          className={styles.menuClose}
          view={EIconView.White}
          icon={EIconType.Close}
          onClick={handleCloseMenu}
        />
      </motion.div>
    </header>
  );
}
export default Header;
