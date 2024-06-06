import { HTMLAttributes } from 'react';
import styles from './footer.module.css';
import { cn } from '@/helpers/class-names';

function Footer({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>OwlTop © 2020 - {new Date().getFullYear()} Все права защищены</div>
      <a href="#" target="_top">
        Пользовательское соглашение
      </a>
      <a href="#" target="_self">
        Политика конфиденциальности
      </a>
    </footer>
  );
}
export default Footer;
