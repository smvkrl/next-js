import { ESize } from '@/enums/size';
import PtagProps from './ptag.props';
import styles from './ptag.module.css';

function Ptag({ size = ESize.M, children, ...props }: PtagProps) {
  const cn = `${styles.p} ${styles[size]}`;
  return (
    <p className={cn} {...props}>
      {children}
    </p>
  );
}
export default Ptag;
