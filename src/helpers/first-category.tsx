import { ETopLevelCategory } from '@/enums/top-level-category';
import { IFirstLevelMenuItem } from '../interfaces/menu.interface';
import BooksIcon from '@/components/menu/icons/books.svg';
import CoursesIcon from '@/components/menu/icons/courses.svg';
import ProductsIcon from '@/components/menu/icons/products.svg';
import ServicesIcon from '@/components/menu/icons/services.svg';

export const firstLevelMenu: IFirstLevelMenuItem[] = [
  {
    route: 'courses',
    name: 'Курсы',
    icon: <CoursesIcon />,
    id: ETopLevelCategory.Courses,
  },
  {
    route: 'services',
    name: 'Сервисы',
    icon: <ServicesIcon />,
    id: ETopLevelCategory.Services,
  },
  {
    route: 'books',
    name: 'Книги',
    icon: <BooksIcon />,
    id: ETopLevelCategory.Books,
  },
  {
    route: 'products',
    name: 'Продукты',
    icon: <ProductsIcon />,
    id: ETopLevelCategory.Products,
  },
];
