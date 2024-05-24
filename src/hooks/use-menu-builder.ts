import getMenu from '@/api/get-menu';
import { ETopLevelCategory } from '@/enums/top-level-category';
import { MenuItem } from '@/interfaces/menu.interface';
import { useEffect, useState } from 'react';

export default function useMenuBuilder() {
  const [category, setCategory] = useState(ETopLevelCategory.Courses);
  const [menu, setMenu] = useState<MenuItem[]>();
  useEffect(() => {
    const menu = async () => {
      setMenu(await getMenu(category));
    };
    void menu();
  }, [category]);

  return { category, menu, setCategory };
}
