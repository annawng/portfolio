'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { allura } from '../fonts';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className='navbar bg-base-100 fixed z-10 max-w-screen-xl px-8 md:px-16 py-6'>
      <div className='hidden md:flex w-full'>
        <div className='flex-1'>
          <Link href='/' className={allura.className + ' lowercase text-3xl'}>
            Anna Wang
          </Link>
        </div>
        <div className='flex-none'>
          <ul className='flex align-center gap-8'>
            <li>
              <Link href='/#about' className='duration-200 hover:text-primary'>
                About
              </Link>
            </li>
            <li>
              <Link
                href='/#experience'
                className='duration-200 hover:text-primary'
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href='/#projects'
                className='duration-200 hover:text-primary'
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='w-full flex justify-between md:hidden'>
        <Link href='/' className={allura.className + ' lowercase text-3xl'}>
          Anna Wang
        </Link>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 16'
          width='24'
          height='24'
          onClick={toggleMenu}
          className='cursor-pointer fill-base-content'
          aria-label='Open menu'
        >
          <path
            fill-rule='evenodd'
            d='M0 16h20v-2H0v2ZM0 2h20V0H0v2Zm0 7h20V7H0v2Z'
          />
        </svg>
        <AnimatePresence>
          {showMenu && (
            <motion.div
              className='fixed bg-base-100 w-screen h-screen inset-0'
              initial={{ x: '100vw' }}
              animate={{ x: '0' }}
              exit={{
                x: '100vw',
              }}
              transition={{ duration: 0.3, type: 'tween', ease: 'easeInOut' }}
            >
              <div className='flex justify-end px-8 py-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 21 20'
                  width='24'
                  height='24'
                  onClick={toggleMenu}
                  className='mr-0 cursor-pointer fill-base-content'
                  aria-label='Close menu'
                >
                  <path
                    fill-rule='evenodd'
                    d='M12.018 10 21 18.554 19.481 20 10.5 11.446 1.518 20 0 18.554 8.981 10 0 1.446 1.518 0 10.5 8.554 19.481 0 21 1.446z'
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className='absolute top-[50%] translate-y-[-50%] flex flex-col items-center gap-12 w-full text-5xl'
              >
                <li>
                  <Link
                    href='/#about'
                    className='duration-200 hover:text-primary'
                    onClick={toggleMenu}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href='/#experience'
                    className='duration-200 hover:text-primary'
                    onClick={toggleMenu}
                  >
                    Experience
                  </Link>
                </li>
                <li>
                  <Link
                    href='/#projects'
                    className='duration-200 hover:text-primary'
                    onClick={toggleMenu}
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default NavBar;
