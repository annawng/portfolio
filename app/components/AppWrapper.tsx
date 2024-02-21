'use client';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted ? (
        <>
          <header>
            <NavBar />
          </header>
          <main className='max-w-screen-xl m-auto font-light px-8 md:px-16'>
            {children}
          </main>
          <Footer />
        </>
      ) : (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
          <span className='loading loading-spinner loading-lg text-primary'></span>
        </div>
      )}
    </>
  );
}
