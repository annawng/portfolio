'use client';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className='navbar bg-base-100'>
      <div className='flex-1'>
        <Link href='/' className='btn btn-ghost normal-case text-xl'>
          LOGO
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link href='/'>About</Link>
          </li>
          <li>
            <Link href='/'>Experience</Link>
          </li>
          <li>
            <Link href='/'>Projects</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
