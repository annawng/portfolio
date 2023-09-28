'use client';
import Link from 'next/link';
import { allura } from '../fonts';

const NavBar = () => {
  return (
    <nav className='navbar bg-base-100 fixed z-10 max-w-screen-xl px-16 py-6'>
      <div className='flex-1'>
        <Link href='/' className={allura.className + ' lowercase text-3xl'}>
          Anna Wang
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='flex align-center gap-8'>
          <li>
            <Link href='/#about' className='duration-200 hover:text-accent'>
              About
            </Link>
          </li>
          <li>
            <Link
              href='/#experience'
              className='duration-200 hover:text-accent'
            >
              Experience
            </Link>
          </li>
          <li>
            <Link href='/#projects' className='duration-200 hover:text-accent'>
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
