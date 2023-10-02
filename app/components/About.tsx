'use client';
import Image from 'next/image';

const About = () => {
  return (
    <section
      id='about'
      className='flex flex-col md:flex-row gap-8 px-8 md:px-16 py-16'
    >
      <div className='flex-1'>
        <h2 className='text-4xl'>About</h2>
      </div>
      <div className='flex-1'>
        <p>
          Welcome to my portfolio! My name is Anna, and I&apos;m a senior at the
          University of Washington studying Computer Science.
        </p>
        <p className='mt-3'>
          My interests lie primarily in frontend development and improving user
          experience, though I like to be involved in the backend and design as
          well.
        </p>
        <p className='mt-3'>
          In my free time, I like making lists: playlists, to-do lists, lists of
          quotes from books and TV shows, and this list of things I make lists
          of.
        </p>
        <Image
          src='/anna.jpg'
          width={2428}
          height={2428}
          alt=''
          className='w-full aspect-[4/3] object-cover object-bottom mt-8'
        />
      </div>
    </section>
  );
};

export default About;
