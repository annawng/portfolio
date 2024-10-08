'use client';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className='navbar w-screen flex justify-center fixed z-10 text-xl pt-8 px-8 md:px-16 text-stone-700'>
      <ul className='flex align-center gap-2 font-normal text-sm md:text-base p-2 rounded-full bg-white/40 backdrop-blur-xl backdrop-saturate-200'>
        <li className='flex'>
          <Link
            href='/'
            className='hover:bg-white/40 px-4 py-2 rounded-full transition duration-200 ease-in-out'
          >
            Work
          </Link>
        </li>
        <li className='flex'>
          <Link
            href='/about'
            className='hover:bg-white/40 px-4 py-2 rounded-full transition duration-200 ease-in-out'
          >
            About
          </Link>
        </li>
        <li className='flex'>
          <Link
            href='https://drive.google.com/file/d/1Vo59mOUyev-kSlpzdfslEzjs-7RIIcN5/view?usp=sharing'
            target='_blank'
            className='hover:bg-white/40 px-4 py-2 rounded-full transition duration-200 ease-in-out'
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
