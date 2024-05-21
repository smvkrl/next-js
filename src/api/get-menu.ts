import { MenuItem } from '@/interfaces/menu.interface';
import { API } from './api';

export default async function getMenu(
  firstCategory: number,
): Promise<MenuItem[]> {
  const res = await fetch(API.topPage.find, {
    method: 'POST',
    body: JSON.stringify({
      firstCategory,
    }),
    headers: new Headers({ 'content-type': 'application/json' }),
  });
  console.log('revalidating getMenu');
  if (!res.ok) {
    throw new Error('Failed to fetch data: ' + res.statusText);
  }
  return res.json() as Promise<MenuItem[]>;
}
