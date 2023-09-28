import './globals.css';
import type { Metadata } from 'next';
import { inter } from './fonts';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

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
      <body className={inter.className}>
        <header className='max-w-screen-xl m-auto'>
          <NavBar />
        </header>
        <main className='max-w-screen-xl m-auto'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
