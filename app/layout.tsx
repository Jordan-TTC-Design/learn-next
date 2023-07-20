import './globals.css';
import type { Metadata } from 'next';

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
