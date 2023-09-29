'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { allura } from '../fonts';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

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
        <Image
          src='/icon-menu.svg'
          alt='Open menu'
          width='32'
          height='32'
          onClick={toggleMenu}
          className='cursor-pointer'
        />
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
                <Image
                  src='/icon-menu-close.svg'
                  alt='Close menu'
                  width='32'
                  height='32'
                  onClick={toggleMenu}
                  className='mr-0 cursor-pointer'
                />
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
