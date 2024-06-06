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
import { notFound } from 'next/navigation';
import Products from '@/components/products/products';

interface IParams {
  params: { alias: string; type: string };
}

export const dynamicParams = false;

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
  if (!page || !params) {
    notFound();
  }
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
      <Products products={products} title={page.title} />
      <div className={styles.hhTitle}>
        <Htag tag={EHtag.H2}>Вакансии - {page.category}</Htag>
        <Tag color={EColor.Red}>hh.ru</Tag>
      </div>
      {page.hh && <HhCard {...page.hh} />}
      {page.advantages && page.advantages.length > 0 && (
        <section>
          <Htag tag={EHtag.H2}>Преимущeства</Htag>
          <Advantages advantages={page.advantages} />
        </section>
      )}
      {page.seoText && (
        <section
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
