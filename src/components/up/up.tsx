'use client';
import { motion, useAnimation } from 'framer-motion';
import styles from './up.module.css';
import UpIcon from './up.svg';
import { useScrollY } from '@/hooks/use-scroll-y';
import { useEffect } from 'react';

function Up() {
  const controls = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    void controls.start({ opacity: (y / document.body.scrollHeight) * 2 });
  }, [y, controls]);

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      className={styles.up}
      onClick={handleScrollUp}
      animate={controls}
      initial={{ opacity: 0 }}
    >
      <UpIcon />
    </motion.div>
  );
}
export default Up;
