import React from 'react';
import Link from 'next/link';
import Head from '@/app/Head';

export default function About() {
  return (
    <>
      <Head></Head>
      <div>index</div>
      <Link href='/about'> go to about page</Link>
    </>
  );
}
