import { notFound } from 'next/navigation';
import getMenu from '@/api/get-menu';
import getPage from '@/api/get-page';
import styles from './page.module.css';
import Htag from '@/components/htag/htag';
import Ptag from '@/components/ptag/ptag';
import Tag from '@/components/tag/tag';
import { EHtag } from '@/enums/htag';
import { EColor } from '@/enums/color';
import { ESize } from '@/enums/size';
import { Metadata } from 'next';
import { firstLevelMenu } from '@/helpers/first-category';

interface IParams {
  params: { alias: string };
}

export async function generateStaticParams() {
  let res: { type: string; alias: string }[] = [];
  for (const firstItem of firstLevelMenu) {
    const menu = await getMenu(firstItem.id);
    res = res.concat(
      menu.flatMap((item) =>
        item.pages.map((page) => ({
          type: firstItem.route,
          alias: page.alias,
        })),
      ),
    );
  }

  return res;
}

export async function generateMetadata({ params }: IParams): Promise<Metadata> {
  const page = await getPage(params.alias);
  return {
    title: page?.metaTitle,
    description: page?.metaDescription,
  };
}

async function PageProducts({ params }: IParams) {
  const page = await getPage(params.alias);
  if (!page || !params) {
    notFound();
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag={EHtag.H1}>{page.title}</Htag>
        {page && (
          <Tag
            color={EColor.Grey}
            size={ESize.M}
            aria-label={page.tags.length + 'элементов'}
          >
            {page.tags.length}
          </Tag>
        )}
      </div>
      <div role="list"></div>
      <div className={styles.hhTitle}>
        <Htag tag={EHtag.H2}>Вакансии - {page.category}</Htag>
        <Tag color={EColor.Red} size={ESize.M}></Tag>
      </div>
      {page.advantages && page.advantages.length > 0 && (
        <>
          <Htag tag={EHtag.H2}>Преимущства</Htag>
          <Ptag>{page.advantages.join(', ')}</Ptag>
        </>
      )}
      {page.seoText && (
        <div
          className={styles.seo}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}
      <Htag tag={EHtag.H2}>Получаемые навыки</Htag>
      {page.tags.map((t) => (
        <Tag key={t} color={EColor.Green}>
          {t}
        </Tag>
      ))}
    </div>
  );
}
export default PageProducts;
