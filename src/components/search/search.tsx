'use client';

import Button from '@/components/button/button';
import Loupe from './loupe.svg';
import styles from './search.module.css';
import Input from '../input/input';
import { useState } from 'react';
import { cn } from '@/helpers/class-names';
import { SearchProps } from './search.props';
import { useRouter } from 'next/navigation';

function Search({ className, ...props }: SearchProps) {
  const [search, setSearch] = useState('');

  const router = useRouter();

  return (
    <form className={cn([className, styles.search])} {...props} role="search">
      <Input
        className={styles.input}
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button
        className={styles.button}
        onClick={(e) => {
          e.preventDefault();
          router.push(`/search?q=${search}`);
        }}
        aria-label="Искать по сайту"
      >
        <Loupe />
      </Button>
    </form>
  );
}
export default Search;
