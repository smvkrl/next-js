import ButtonProps from './button.props';
import styles from './button.module.css';
import { EArrDirection } from '@/enums/arrDirection';
import { EView } from '@/enums/view';
import Arrow from './arrow.svg';

function Button({
  view = EView.Primary,
  arrow = EArrDirection.None,
  children,
  ...props
}: ButtonProps) {
  const buttonStyle = `${styles.button} ${styles[view]}`;
  return (
    <button className={buttonStyle} {...props}>
      {children}
      {arrow !== EArrDirection.None ? (
        <span className={`${styles.arrow} ${styles[arrow]}`}>
          <Arrow />
        </span>
      ) : (
        ''
      )}
    </button>
  );
}
export default Button;
