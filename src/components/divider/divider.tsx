import { cn } from '@/helpers/class-names';
import DividerProps from './divider.props';
import styles from './divider.module.css';

function Divider({ className, ...props }: DividerProps) {
  return <hr className={cn(styles.hr, className)} {...props} />;
}
export default Divider;
