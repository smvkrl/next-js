'use client';
import { motion, useAnimation } from 'framer-motion';
import styles from './up.module.css';
import { useScrollY } from '@/hooks/use-scroll-y';
import { useEffect } from 'react';
import ButtonIcon from '../button-icon/button-icon';
import { EIconType, EIconView } from '@/enums/icon-type';

function Up() {
  const controls = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    void controls.start({ opacity: (2 * y) / document.body.scrollHeight });
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
      <ButtonIcon view={EIconView.Primary} icon={EIconType.Up} />
    </motion.div>
  );
}
export default Up;
