import { ProductModel } from '@/interfaces/product.interface';
import { PageItem } from '@/interfaces/menu.interface';
import { API } from './api';

export default async function getProduct(
  page: PageItem,
): Promise<ProductModel[]> {
  const res = await fetch(API.product.find, {
    method: 'POST',
    body: JSON.stringify({
      category: page.category,
      limit: 10,
    }),
    headers: new Headers({ 'content-type': 'application/json' }),
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data: ' + res.statusText);
  }
  const data = (await res.json()) as Promise<ProductModel[]>;

  return data;
}
