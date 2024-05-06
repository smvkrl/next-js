import { ReactElement } from 'react';
import { HTagProps } from './Htag.props';
import { EHtag } from '@/app/enums/EHtag';
import styles from './Htag.module.css';

function Htag({ tag, children }: HTagProps): ReactElement {
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
