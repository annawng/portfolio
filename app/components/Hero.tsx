'use client';

const Hero = () => {
  return (
    <section className='max-w-screen-lg m-auto flex flex-col gap-16 md:gap-2 pt-40'>
      <h1 className='text-[104px] sm:text-[160px] md:text-[220px] font-bold flex flex-col gap-0'>
        <span className='leading-[0.9] sm:leading-[0.6]'>Anna</span>
        <span className='text-right'>Wang</span>
      </h1>
      <div className='flex items-end justify-between gap-12'>
        <p className='text-base sm:text-lg md:text-2xl font-light uppercase max-w-xs'>
          Frontend Developer based in Seattle, WA
        </p>
        <p className='text-base sm:text-lg md:text-2xl font-light uppercase'>
          Previously @ Mark43
        </p>
      </div>
    </section>
  );
};

export default Hero;
