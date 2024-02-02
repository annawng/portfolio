const Hero = () => {
  return (
    <section className='min-h-screen flex flex-col'>
      <div className='absolute top-[50%] translate-y-[-50%] px-8 md:px-16'>
        <h1 className='uppercase tracking-widest text-lg text-neutral'>
          👋 Hi, I&apos;m Anna!
        </h1>
        <p className='text-5xl font-bold pt-4'>
          Software Developer based in Seattle, WA
        </p>
        <p className='text-5xl pt-2'>Previously @ Mark43</p>
      </div>
    </section>
  );
};

export default Hero;
