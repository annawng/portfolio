'use client';

import Image from 'next/image';

const About = () => {
  return (
    <section className='flex flex-col md:flex-row-reverse gap-12 md:gap-32 max-w-screen-lg m-auto pt-32 pb-16 md:pb-28'>
      <div className='flex-1 flex flex-col gap-4 md:gap-8'>
        <h1 className='text-5xl md:text-8xl font-bold uppercase'>About</h1>
        <div className='flex-1 flex flex-col gap-3'>
          <p>
            Hello! I&apos;m Anna, a senior studying Computer Science at the
            University of Washington. With a background in full-stack
            development, UI/UX design, accessibility testing, and design
            systems, I love working alongside designers and engineers to build
            intuitive, enjoyable experiences.
          </p>
          <p>
            My hobbies include listening to music (63,227 minutes last year),
            making playlists (over 350 somehow), and playing instruments (mostly
            piano and guitar).
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
