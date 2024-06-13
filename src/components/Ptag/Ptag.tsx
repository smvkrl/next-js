import { ESize } from '@/enums/size';
import PtagProps from './ptag.props';
import styles from './ptag.module.css';
import { cn } from '@/helpers/class-names';

function Ptag({ size = ESize.M, children, ...props }: PtagProps) {
  return (
    <p className={cn(styles.p, styles[size])} {...props}>
      {children}
    </p>
  );
}
export default Ptag;
