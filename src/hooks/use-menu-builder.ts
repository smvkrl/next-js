import getMenu from '@/api/get-menu';
import { ETopLevelCategory } from '@/enums/top-level-category';
import { IMenuItem } from '@/interfaces/menu.interface';
import { useEffect, useState } from 'react';

export default function useMenuBuilder(
  firstLevelCategory: ETopLevelCategory = ETopLevelCategory.Courses,
) {
  const [firstCat, setCat] = useState(firstLevelCategory);
  const [menu, setMenu] = useState<IMenuItem[]>();
  useEffect(() => {
    const menu = async () => {
      setMenu(await getMenu(firstCat));
    };
    void menu();
  }, [firstCat]);

  const [secondCat, setSecondCat] = useState<string | null>(null);

  useEffect(() => {
    setSecondCat(null);
  }, [firstCat]);

  const firstCategory = {
    get: firstCat,
    set: setCat,
  };

  const secondCategory = {
    get: secondCat,
    set: setSecondCat,
  };

  return {
    firstCategory,
    secondCategory,
    menu,
  };
}
