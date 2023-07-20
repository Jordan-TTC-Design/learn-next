import React from 'react';
import Link from 'next/link';
// import Head from '@/app/Head';

export default function About() {
  return (
    <>
      {/* <Head></Head> */}
      <h1>index</h1>
      <p>
        <Link href='/users'>USER</Link>
      </p>
      <Link href='/about'>About</Link>
    </>
  );
}
