import { ESize } from '@/enums/size';
import styles from './tag.module.css';
import TagProps from './tag.props';
import { cn } from '@/helpers/class-names';

function Tag({ size = ESize.M, color, href, className, children }: TagProps) {
  const isColor = color ? true : false;
  return (
    <div
      className={cn(
        className,
        styles.tag,
        styles[size],
        [styles.color, isColor],
        [styles[color ?? 0], isColor],
      )}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
}
export default Tag;
