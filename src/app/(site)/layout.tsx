import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import styles from './layout.module.css';
import Header from '@/layout/header/header';
import Sidebar from '@/layout/sidebar/sidebar';
import Footer from '@/layout/footer/footer';
import { ReactElement } from 'react';

const notoSans = Noto_Sans_KR({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'OWL top',
  description: 'Awesome courses',
};

export default function RootLayout({ children }: { children: ReactElement }) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <div className={styles.wrapper}>
          <Header className={styles.header} />
          <Sidebar className={styles.sidebar} />
          <main className={styles.main}>{children}</main>
          <Footer className={styles.footer} />
        </div>
      </body>
    </html>
  );
}

