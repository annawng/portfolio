'use client';

import Image from 'next/image';

const About = () => {
  return (
    <section className='pt-32 sm:pt-40 pb-10 background-gradient'>
      <div className='px-8 sm:px-16'>
        <div className='flex flex-col-reverse md:flex-row-reverse gap-12 lg:gap-24 max-w-screen-lg m-auto '>
          <div className='max-w-xl flex flex-col gap-6 md:gap-8'>
            <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
              About Me
            </h1>
            <div className='flex flex-col gap-6 sm:gap-3 max-w-56 text-stone-600'>
              <p>
                Hi, I&apos;m Anna! I recently graduated from the University of
                Washington with a B.S. in Computer Science. Currently, I&apos;m
                at SoundCloud as a Web Engineering Intern, and this fall,
                I&apos;ll be joining Snap Inc. as a Software Engineer.
              </p>
              <p>
                With a background in full-stack development, UI/UX design,
                accessibility testing, and design systems, I love working
                alongside designers and engineers to build intuitive, enjoyable
                experiences.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll probably find me blasting
                music through my headphones, making hundreds of Spotify
                playlists that don&apos;t need to exist, practicing guitar at
                absurd hours, or sustaining hearing damage at a concert.
              </p>
            </div>
          </div>
          <div className='drop-shadow-xl'>
            <Image
              src='/anna.jpg'
              width={2003}
              height={2003}
              alt=''
              className='w-56 md:w-full shine aspect-[4/5] object-cover rounded-2xl'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
