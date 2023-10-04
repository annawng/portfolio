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
      <div className='flex-1 flex flex-col gap-3'>
        <p>
          Welcome to my portfolio! My name is Anna, and I&apos;m currently a
          senior at the University of Washington studying Computer Science.
        </p>
        <p>
          I first grew interested in web development and design in 2020 as I
          scrolled through{' '}
          <a
            href='https://web.archive.org/web/20200410050818/https://www.thestrokes.com/
'
            target='_blank'
            className='text-primary hover:text-primary-focus'
          >
            the website of my favorite band
          </a>
          . I liked the idea of being able to apply my technical skills in
          programming to create cool visual experiences relating to my other
          interests, such as music.
        </p>
        <p>
          After gaining exposure to web accessibility at a job where I saw
          firsthand the frustrations screen reader users face when performing
          tasks that are straightforward for sighted users, I also developed a
          fascination with building inclusive and enjoyable user experiences.
        </p>
        <p>
          My passion lies in the intersection of development and design. In
          addition to writing code, I enjoy participating in design discussions
          and thinking about how to create user interfaces that not only look
          good but are usable by all.
        </p>
        <p>
          When I&apos;m not coding, you can find me listening to music
          &#40;copius amounts of The Strokes and Arctic Monkeys, among other
          bands&#41;, playing piano, rewatching Parks and Recreation, or
          drinking green tea in various forms.
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
