'use client';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className='navbar w-screen flex justify-center fixed z-10 text-xl pt-8 px-8 md:px-16 text-white'>
      <ul className='flex align-center gap-2 font-normal text-sm md:text-base p-2 rounded-full bg-stone-900/20 backdrop-blur-xl'>
        <li className='flex'>
          <Link
            href='/'
            className='hover:bg-white/20 px-4 py-2 rounded-full transition duration-200 ease-in-out'
          >
            Work
          </Link>
        </li>
        <li className='flex'>
          <Link
            href='/about'
            className='hover:bg-white/20 px-4 py-2 rounded-full transition duration-200 ease-in-out'
          >
            About
          </Link>
        </li>
        <li className='flex'>
          <Link
            href='https://drive.google.com/file/d/1q1nr4Z-dalnK_7k5hQ8P4oTIV_bKoG17/view?usp=sharing'
            target='_blank'
            className='hover:bg-white/20 px-4 py-2 rounded-full transition duration-200 ease-in-out'
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
