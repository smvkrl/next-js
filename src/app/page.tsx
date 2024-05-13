import Button from './components/Button/Button';
import Htag from './components/Htag/Htag';
import Ptag from './components/Ptag/Ptag';
import Tag from './components/Tag/Tag';
import { EButtArr } from './enums/EButtArr';
import { EView } from './enums/EView';
import { EColor } from './enums/EColor';
import { EHtag } from './enums/EHtag';
import { ESize } from './enums/ESize';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}></div>
      <Htag tag={EHtag.H1}>Heading primary</Htag>
      <div>
        <Tag color={EColor.Red} href="/">
          Test
        </Tag>
        <Tag>Test2</Tag>
        <Tag color={EColor.Green}>Test3</Tag>
      </div>
      <Ptag size={ESize.L}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        velit rem qui voluptate? Facere reiciendis ipsum quidem suscipit vitae
        reprehenderit neque itaque laboriosam omnis accusamus obcaecati esse
        consequuntur, unde autem.
      </Ptag>
      <div>
        <Button>Hello</Button>
        <Button view={EView.Ghost} arrow={EButtArr.Right}>
          Ghost
        </Button>
      </div>
    </main>
  );
}

