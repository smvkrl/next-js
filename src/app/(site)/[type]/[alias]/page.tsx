import { notFound } from 'next/navigation';
import getMenu from '@/api/get-menu';
import getPage from '@/api/get-page';
import styles from './page.module.css';
import Htag from '@/components/htag/htag';
import Tag from '@/components/tag/tag';
import { EHtag } from '@/enums/htag';
import { EColor } from '@/enums/color';
import { Metadata } from 'next';
import { firstLevelMenu } from '@/helpers/first-category';
import getProduct from '@/api/get-product';
import HhCard from '@/components/hh-card/hh-card';
import Advantages from '@/components/advantages/advantages';
import Product from '@/components/product/product';

interface IParams {
  params: { alias: string; type: string };
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
  const products = await getProduct(page);
  if (!page || !products || !params) {
    notFound();
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag={EHtag.H1}>{page.title}</Htag>
        <Tag color={EColor.Grey} aria-label={products.length + 'элементов'}>
          {products.length}
        </Tag>

        {/* <Sort sort={sort} setSort={setSort} /> */}
      </div>
      <div role="list">
        {products.map((p) => (
          <Product role="listitem" key={p._id} product={p} />
        ))}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag={EHtag.H2}>Вакансии - {page.category}</Htag>
        <Tag color={EColor.Red}>hh.ru</Tag>
      </div>
      {page.hh && <HhCard {...page.hh} />}
      {page.advantages && page.advantages.length > 0 && (
        <>
          <Htag tag={EHtag.H2}>Преимущства</Htag>
          <Advantages advantages={page.advantages} />
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
        <Tag key={t} color={EColor.Grey}>
          {t}
        </Tag>
      ))}
    </div>
  );
}
export default PageProducts;
