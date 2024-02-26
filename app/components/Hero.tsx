'use client';

const Hero = () => {
  return (
    <section className='max-w-screen-sm m-auto flex flex-col gap-4 pb-12'>
      <h1 className='text-2xl font-medium'>Anna Wang</h1>
      <div className='text-base font-light text-neutral flex flex-col gap-2'>
        <p>
          Frontend developer based in Seattle. Currently pursuing a Bachelor of
          Science degree in Computer Science at the University of Washington,
          intending to graduate in June 2024. Previously a UX Engineering Intern
          at Mark43.
        </p>
        <p>
          My hobbies include listening to music (63,227 minutes last year),
          making playlists (I have over 300 for some reason), and playing
          instruments (mostly piano and guitar).
        </p>
      </div>
    </section>
  );
};

export default Hero;
