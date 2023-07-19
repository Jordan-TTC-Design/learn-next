import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

import Style from '@/app/about/styles.module.css';

export const metaData: Metadata = {
  title: 'About',
  description: 'About page',
};

export default function Home() {
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
