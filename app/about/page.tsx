'use client';

import Image from 'next/image';

const About = () => {
  return (
    <section className='flex flex-col md:flex-row-reverse gap-12 md:gap-32 max-w-screen-lg m-auto pt-32 pb-16 md:pb-28'>
      <div className='flex-1 flex flex-col gap-4 md:gap-8'>
        <h1 className='text-5xl md:text-8xl font-bold uppercase'>About</h1>
        <div className='flex-1 flex flex-col gap-3'>
          <p>
            Hello! My name is Anna, and I am pursuing a BS in Computer Science
            at the University of Washington, intending to graduate in June 2024.
          </p>
          <p>
            I love building websites, working on design systems, and trying to
            become a better designer. Currently, I am a teaching assistant for
            CSE 484: Computer Security and a web developer/designer on various
            projects. I also have a background in accessibility testing.
          </p>
          <p>
            Additionally, I am passionate about music and spend a lot of time
            playing piano or guitar, listening to music (my favorite bands are
            The Strokes and Arctic Monkeys), and creating an obscene amount of
            playlists (apparently I&apos;ve made over 300 Spotify playlists
            since 2019).
          </p>
        </div>
      </div>
      <div className='flex-1'>
        <Image
          src='/anna.jpg'
          width={2428}
          height={2428}
          alt=''
          className='w-full aspect-[3/4] object-cover object-bottom'
        />
      </div>
    </section>
  );
};

export default About;
