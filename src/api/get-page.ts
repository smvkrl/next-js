import { TopPageModel } from '@/interfaces/page.interface';
import { API } from './api';

export default async function getPage(alias: string): Promise<TopPageModel> {
  const res = await fetch(API.topPage.byAlias + alias, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data: ' + res.statusText);
  }

  return res.json() as Promise<TopPageModel>;
}