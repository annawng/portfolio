'use client';
import './globals.css';
import { useState, useEffect } from 'react';
import type { Metadata } from 'next';

import { Providers } from './theme/Providers';
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html
      lang='en'
      className='scroll-pt-8 scroll-smooth'
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <Providers>
          {mounted ? (
            <>
              <header className='max-w-screen-xl m-auto'>
                <NavBar />
              </header>
              <main className='max-w-screen-xl m-auto'>{children}</main>
              <Footer />
            </>
          ) : (
            <div className='w-screen h-screen flex flex-col items-center justify-center'>
              <span className='loading loading-spinner loading-lg text-primary'></span>
            </div>
          )}
        </Providers>
      </body>
    </html>
  );
}
