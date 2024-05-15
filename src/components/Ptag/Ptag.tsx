import { ESize } from '@/enums/ESize';
import PtagProps from './Ptag.props';
import styles from './Ptag.module.css';

function Ptag({ size = ESize.M, children, ...props }: PtagProps) {
  const cn = `${styles.p} ${styles[size]}`;
  return (
    <p className={cn} {...props}>
      {children}
    </p>
  );
}
export default Ptag;
