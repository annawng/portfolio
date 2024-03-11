'use client';

import Image from 'next/image';

const About = () => {
  return (
    <section className='pt-40 pb-20 background-gradient'>
      <div className='flex flex-col md:flex-row-reverse gap-12 md:gap-24 max-w-screen-lg m-auto'>
        <div className='max-w-xl flex flex-col gap-4 md:gap-8'>
          <h1 className='text-5xl md:text-6xl lg:text-8xl font-bold'>
            About Me
          </h1>
          <div className='flex flex-col gap-3 max-w-56'>
            <p>
              Hello! I&apos;m Anna, a senior studying Computer Science at the
              University of Washington. With a background in full-stack
              development, UI/UX design, accessibility, and design systems, I
              love working alongside designers and engineers to build intuitive,
              enjoyable experiences.
            </p>
            <p>
              Last summer, I joined Mark43 as a UX Engineering Intern, where I
              contributed to the design system used across the company&apos;s
              public safety products. I loved getting to work on the entire
              process of creating components: discussing with the engineering
              and product teams about the use cases and desired features,
              designing in Figma, developing in React, and creating interactive
              examples with documentation in Storybook. I also had the
              opportunity to apply my experience in web accessibility testing to
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
            className='shine aspect-[4/5] object-cover rounded-xl'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
