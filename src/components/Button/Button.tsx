import ButtonProps from './button.props';
import styles from './button.module.css';
import { EArrDirection } from '@/enums/arr-direction';
import { EView } from '@/enums/view';
import Arrow from './arrow.svg';
import { cn } from '@/helpers/class-names';

function Button({
  view = EView.Primary,
  arrow = EArrDirection.None,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(className, styles.button, styles[view])} {...props}>
      {children}
      {arrow !== EArrDirection.None ? (
        <span className={cn(styles.arrow, styles[arrow])}>
          <Arrow />
        </span>
      ) : null}
    </button>
  );
}
export default Button;
