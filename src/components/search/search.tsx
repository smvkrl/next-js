'use client';

import Button from '@/components/button/button';
import Loupe from './loupe.svg';
import styles from './search.module.css';
import Input from '../input/input';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { cn } from '@/helpers/class-names';
import { SearchProps } from './search.props';
import { useRouter } from 'next/navigation';

function Search({ className, ...props }: SearchProps) {
  const [search, setSearch] = useState('');

  const router = useRouter();

  const handleSearch: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    router.push(`/search?q=${search}`);
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form
      className={cn(className, styles.search)}
      {...props}
      role="search"
      onSubmit={handleSearch}
    >
      <Input
        className={styles.input}
        placeholder="Search..."
        value={search}
        onChange={handleInputChange}
      />
      <Button
        type="submit"
        className={styles.button}
        aria-label="Искать по сайту"
      >
        <Loupe />
      </Button>
    </form>
  );
}
export default Search;
