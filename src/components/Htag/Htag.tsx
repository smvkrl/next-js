import { HTagProps } from './htag.props';
import { EHtag } from '@/enums/htag';
import styles from './htag.module.css';

function Htag({ tag, children }: HTagProps) {
  switch (tag) {
    case EHtag.H1:
      return <h1 className={styles.h1}>{children}</h1>;
    case EHtag.H2:
      return <h2 className={styles.h2}>{children}</h2>;
    case EHtag.H3:
      return <h3 className={styles.h3}>{children}</h3>;
    default:
      return <>{children}</>;
  }
}
export default Htag;
