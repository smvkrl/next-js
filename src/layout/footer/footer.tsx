import { HTMLAttributes } from 'react';
import styles from './footer.module.css';

function Footer({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  const cn = `${className} ${styles.footer}`;
  return (
    <footer className={cn} {...props}>
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
