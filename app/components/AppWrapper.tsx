'use client';
import NavBar from './NavBar';
import Footer from './Footer';

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className='font-light'>{children}</main>
      <Footer />
    </>
  );
}
