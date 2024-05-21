import getMenu from '@/api/get-menu';
import getPage from '@/api/get-page';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const menu = await getMenu(0);
  return menu.flatMap((item) =>
    item.pages.map((page) => ({ alias: page.alias })),
  );
}

async function PageProducts({ params }: { params: { alias: string } }) {
  console.log(params);

  const page = await getPage(params.alias);
  if (!page) {
    notFound();
  }
  return <div>{page.title}</div>;
}
export default PageProducts;
