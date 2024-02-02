'use client';
import Image from 'next/image';

const About = () => {
  return (
    <section
      id='about'
      className='flex flex-col md:flex-row gap-8 px-8 md:px-16 py-16'
    >
      <div className='flex-1'>
        <h2 className='text-4xl font-semibold'>About</h2>
      </div>
      <div className='flex-1 flex flex-col gap-3'>
        <p>
          Hello! My name is Anna, and I&apos;m a senior at the University of
          Washington studying Computer Science.
        </p>
        <p>
          I love building websites and all the considerations that come into
          play: user experience, accessibility, performance, security, and so
          on.
        </p>
        <p>
          I&apos;m also very passionate about music and spend a lot of time
          playing piano or guitar, listening to music (big fan of The Strokes,
          Arctic Monkeys, Radiohead, Polyphia, The Cure, etc.), and making
          playlists (apparently I&apos;ve made over 300 Spotify playlists since
          2019).
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
