'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CommonNavSearch(props: { className: string }) {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const handleSearch = async (e: any) => {
    e.preventDefault();
    setSearch('');
    router.push(`/${search}`);
  };
  return (
    <form
      className={`w-50 flex justify-center md:justify-between ${props.className}`}
      onSubmit={handleSearch}
    >
      <input
        type='text'
        className='w-full border border-pr'
        value={search}
        onChange={e => {
          setSearch(e.target.value);
        }}
        placeholder='Search'
      />
      <button type='submit' className='py-1 px-3 bg-pr text-white'>
        Enter
      </button>
    </form>
  );
}
