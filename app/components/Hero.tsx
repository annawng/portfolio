'use client';

import { HiChevronDown as ChevronDown } from 'react-icons/hi2';

const Hero = () => {
  return (
    <section className=' m-auto flex flex-col items-center gap-4 pb-12 background-gradient text-stone-900'>
      <div className='flex flex-col gap-2 md:gap-6 text-center pt-72 pb-48 justify-center'>
        <h1 className='text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold'>
          Anna Wang
        </h1>
        <p className='text-md sm:text-lg md:text-2xl font-extralight lowercase text-stone-500'>
          Frontend Developer based in Seattle, WA
        </p>
      </div>
      <div className='flex gap-2 items-center'>
        <p className='text-sm md:text-base lowercase'>View my work</p>
        <ChevronDown size={24} aria-hidden />
      </div>
    </section>
  );
};

export default Hero;
