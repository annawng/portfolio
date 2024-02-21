'use client';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { HiArrowUpRight as Arrow } from 'react-icons/hi2';

const NavBar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className='navbar w-screen bg-base-100 fixed z-10 uppercase text-xl flex pt-2 px-8 md:px-16'>
      <div className='absolute inset-0 h-2 w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'></div>
      <div className='hidden md:flex justify-between w-full py-6 max-w-screen-lg m-auto'>
        <div>
          <Link href='/' className='text-3xl font-extrabold'>
            AW
          </Link>
        </div>
        <ul className='flex align-center gap-8 font-normal text-base'>
          <li className='custom-underline'>
            <Link href='/'>Home</Link>
          </li>
          <li className='custom-underline'>
            <Link href='/about'>About</Link>
          </li>
          <li className='group custom-underline'>
            <Link
              href='https://drive.google.com/file/d/1q1nr4Z-dalnK_7k5hQ8P4oTIV_bKoG17/view?usp=sharing'
              target='_blank'
              className='flex items-center gap-2'
            >
              Resume
              <Arrow
                aria-hidden
                className='transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
              />
            </Link>
          </li>
        </ul>
        <div className='flex items-center'>
          <label className='swap swap-rotate'>
            <input
              type='checkbox'
              onClick={() =>
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
              }
              defaultChecked={resolvedTheme === 'light'}
            />
            <svg
              className='swap-on fill-current w-7'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              aria-label='Switch to dark mode'
            >
              <path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
            </svg>
            <svg
              className='swap-off fill-current w-7'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              aria-label='Switch to light mode'
            >
              <path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
            </svg>
          </label>
        </div>
      </div>

      <div className='w-full flex justify-between py-6 md:hidden'>
        <Link href='/' className='text-3xl font-extrabold'>
          AW
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
            fillRule='evenodd'
            d='M0 16h20v-2H0v2ZM0 2h20V0H0v2Zm0 7h20V7H0v2Z'
          />
        </svg>
        <AnimatePresence>
          {showMenu && (
            <motion.div
              className='fixed bg-base-100 w-screen h-screen inset-0 z-10 flex flex-col'
              initial={{ x: '100vw' }}
              animate={{ x: '0' }}
              exit={{
                x: '100vw',
              }}
              transition={{ duration: 0.3, type: 'tween', ease: 'easeInOut' }}
            >
              <div className='nav-open flex justify-end mx-8 my-6'>
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
                    fillRule='evenodd'
                    d='M12.018 10 21 18.554 19.481 20 10.5 11.446 1.518 20 0 18.554 8.981 10 0 1.446 1.518 0 10.5 8.554 19.481 0 21 1.446z'
                  />
                </svg>
              </div>
              <div className='absolute top-[50%] translate-y-[-50%] flex flex-col items-center gap-16 w-full'>
                <ul className='flex flex-col items-center gap-12 text-4xl'>
                  <li>
                    <Link href='/' onClick={toggleMenu}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href='/about' onClick={toggleMenu}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='https://drive.google.com/file/d/1q1nr4Z-dalnK_7k5hQ8P4oTIV_bKoG17/view?usp=sharing'
                      target='_blank'
                      className='flex items-center gap-2'
                    >
                      Resume
                      <Arrow aria-hidden />
                    </Link>
                  </li>
                </ul>

                <label className='swap swap-rotate'>
                  <input
                    type='checkbox'
                    onClick={() =>
                      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
                    }
                    defaultChecked={resolvedTheme === 'light'}
                  />

                  <svg
                    className='swap-on fill-current w-10'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    aria-label='Switch to dark mode'
                  >
                    <path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
                  </svg>
                  <svg
                    className='swap-off fill-current w-10'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    aria-label='Switch to light mode'
                  >
                    <path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
                  </svg>
                </label>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default NavBar;
