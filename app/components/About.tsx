'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 1.2 }}
      viewport={{ once: true }}
    >
      <section id='about' className='flex flex-row gap-8 p-16'>
        <div className='flex-1'>
          <h2 className='text-4xl'>About</h2>
        </div>
        <div className='flex-1'>
          <p>
            Welcome to my portfolio! My name is Anna, and I&apos;m a senior at
            the University of Washington studying Computer Science.
          </p>
          <p className='mt-3'>
            My interests lie primarily in frontend development and improving
            user experience, though I like to be involved in the backend and
            design as well.
          </p>
          <p className='mt-3'>
            In my free time, I like making lists: playlists, to-do lists, lists
            of quotes from books and TV shows, and this list of things I make
            lists of.
          </p>
          <Image
            src='/anna.jpg'
            width={2428}
            height={2428}
            alt=''
            className='w-full h-4/6 object-cover object-bottom mt-8'
          />
        </div>
      </section>
    </motion.div>
  );
};

export default About;
