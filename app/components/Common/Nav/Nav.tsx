import Link from 'next/link';
import CommonNavSearch from '@/app/components/Common/Nav/Search';

export default function CommonNav() {
  return (
    <nav className='w-full py-2 px-4 bg-gray-200 flex items-center justify-between'>
      <h1 className='bg-white p-1 px-2 w-max rounded'>
        <Link href='/' className='text-pr text-zh-head-4'>
          Logo
        </Link>
      </h1>
      <CommonNavSearch className='w-[240px]' />
    </nav>
  );
}
