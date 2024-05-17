'use client';

import { EArrDirection } from '@/enums/arrDirection';
import { EView } from '@/enums/view';
import { EColor } from '@/enums/color';
import { EHtag } from '@/enums/htag';
import { ESize } from '@/enums/size';
import Htag from '@/components/htag/htag';
import Tag from '@/components/tag/tag';
import Rating from '@/components/rating/rating';
import Ptag from '@/components/Ptag/ptag';
import Button from '@/components/button/button';
import styles from './page.module.css';

function click(rating: number) {
  console.log(rating);
}

export default function Home() {
  return (
    <>
      <Htag tag={EHtag.H1}>Heading primary</Htag>
      <div>
        <Tag color={EColor.Red} href="/">
          Test
        </Tag>
        <Tag>Test2</Tag>
        <Tag color={EColor.Green}>Test3</Tag>
      </div>
      <Rating rating={4} isEditable={true} setRating={click} />
      <Ptag size={ESize.L}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        velit rem qui voluptate? Facere reiciendis ipsum quidem suscipit vitae
        reprehenderit neque itaque laboriosam omnis accusamus obcaecati esse
        consequuntur, unde autem.
      </Ptag>
      <div className={styles.flex}>
        <Button>Hello</Button>
        <Button view={EView.Ghost} arrow={EArrDirection.Right}>
          Ghost
        </Button>
      </div>
    </>
  );
}

