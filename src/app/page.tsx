import Button from './components/Button/Button';
import Htag from './components/Htag/Htag';
import { EButtArr } from './enums/EButtArr';
import { EButtView } from './enums/EButtView';
import { EHtag } from './enums/EHtag';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}></div>
      <Htag tag={EHtag.H1}>Heading primary</Htag>
      <Button>Hello</Button>
      <Button view={EButtView.Ghost} arrow={EButtArr.Down}>
        Ghost
      </Button>
    </main>
  );
}

