import { ITopPageModel } from '@/interfaces/page.interface';
import { API } from './api';

export default async function getPage(alias: string): Promise<ITopPageModel> {
  const res = await fetch(API.topPage.byAlias + alias);
  if (!res.ok) {
    throw new Error('Failed to fetch data: ' + res.statusText);
  }
  const data = (await res.json()) as Promise<ITopPageModel>;
  return data;
}
