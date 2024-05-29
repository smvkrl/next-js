import { cn } from '@/helpers/class-names';
import DividerProps from './divider.props';
import styles from './divider.module.css';

function Divider({ className, ...props }: DividerProps) {
  return <hr className={cn([className, styles.hr])} {...props} />;
}
export default Divider;
