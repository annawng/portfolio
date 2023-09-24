import './globals.css';
import type { Metadata } from 'next';
import { inter } from './fonts';

export const metadata: Metadata = {
  title: 'Anna Wang',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' data-theme='light' className='scroll-pt-8 scroll-smooth'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
