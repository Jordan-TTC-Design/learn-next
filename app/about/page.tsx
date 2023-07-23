import Link from 'next/link';
import type { Metadata } from 'next';

import Style from '@/app/about/styles.module.css';

export const metadata: Metadata = {
  title: 'About',
  description: '這是我在學習 Next.js 的筆記',
};

export default function About() {
  return (
    <>
      <div className={Style.main}>
        <p className='text-black'>about</p>
        <Link href='/' className='text-black'>
          Link to home page
        </Link>
      </div>
    </>
  );
}
