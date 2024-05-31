'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function Search() {
  const searchParams = useSearchParams();
  return <div>Search {searchParams.get('q')}</div>;
}

function SearchPage() {
  return (
    <Suspense>
      <Search />
    </Suspense>
  );
}

export default SearchPage;
