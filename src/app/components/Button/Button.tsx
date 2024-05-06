import ButtonProps from './Button.props';
import styles from './Button.module.css';
import { EButtArr } from '@/app/enums/EButtArr';
import { EButtView } from '@/app/enums/EButtView';
import Arrow from './arrow.svg';

function Button({
  view = EButtView.Primary,
  arrow = EButtArr.None,
  children,
  ...props
}: ButtonProps) {
  const buttonStyle = `${styles.button} ${styles[view]}`;
  return (
    <button className={buttonStyle} {...props}>
      {children}
      {arrow !== EButtArr.None ? (
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
