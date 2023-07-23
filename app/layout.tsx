import './globals.css';
import type { Metadata } from 'next';
import CommonNav from '@/app/components/Common/Nav/Nav';

// google font
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

// static metadata
export const metadata: Metadata = {
  title: 'Learn Next.js',
  description: '這是我在學習 Next.js 的筆記',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='min-h-screen w-full overflow-y-auto bg-gray-100 flex flex-col'>
          <CommonNav></CommonNav>
          <div className='grow bg-gray-100'>{children}</div>
        </div>
      </body>
    </html>
  );
}
