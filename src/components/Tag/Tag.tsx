import { ESize } from '@/enums/ESize';
import styles from './Tag.module.css';
import TagProps from './Tag.props';

function Tag({
  size = ESize.M,
  color,
  href,
  className,
  children,
  ...props
}: TagProps) {
  let cn = `${className} ${styles.tag} ${styles[size]}`;
  if (color) {
    cn += ` ${styles.color} ${styles[color]}`;
  }

  return (
    <div className={cn} {...props}>
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
}
export default Tag;
