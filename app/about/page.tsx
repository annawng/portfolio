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
                Hello! I&apos;m Anna, a senior studying Computer Science at the
                University of Washington. With a background in full-stack
                development, UI/UX design, accessibility testing, and design
                systems, I love working alongside designers and engineers to
                build intuitive, enjoyable experiences.
              </p>
              <p>
                Last summer, I joined Mark43 as a UX Engineering Intern, where I
                contributed to the design system used across the company&apos;s
                public safety products. I loved getting to work on the entire
                process of creating components: discussing with the engineering
                and product teams about the use cases and intended behavior,
                designing in Figma, developing in React, and creating
                interactive examples with documentation in Storybook. I also had
                the opportunity to apply my expertise in web accessibility to
                increase WCAG compliance across the component library.
              </p>
              <p>
                When I&apos;m not coding or designing, you&apos;ll probably find
                me listening to music (63,227 minutes last year), making Spotify
                playlists (I have over 350—is that concerning?), or playing
                instruments (mostly piano and guitar).
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
