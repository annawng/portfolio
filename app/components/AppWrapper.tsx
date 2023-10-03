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
    </>
  );
}
