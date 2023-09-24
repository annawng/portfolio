'use client';
import { motion, Variants, useAnimationControls } from 'framer-motion';

import Image from 'next/image';
import Link from 'next/link';

type ProjectOverviewProps = {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  href: string; // can maybe generate from title
};

const ProjectOverview = ({
  title,
  subtitle,
  description,
  imageSrc,
  href,
}: ProjectOverviewProps) => {
  const controls = useAnimationControls();

  const imageVariants: Variants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
  };

  const lineVariants: Variants = {
    initial: { width: '25px' },
    hover: { width: '50px' },
  };

  return (
    <div className='flex justify-between items-center w-full overflow-hidden'>
      <div className='overflow-hidden w-7/12 bg-gray-100 p-12 flex justify-center'>
        <motion.div
          animate={controls}
          variants={imageVariants}
          transition={{ ease: 'easeInOut' }}
        >
          <Image
            src={imageSrc}
            width={1080}
            height={675}
            alt=''
            className='w-full object-cover drop-shadow-2xl cursor-pointer'
            onMouseEnter={() => {
              controls.start('hover');
            }}
            onMouseLeave={() => {
              controls.start('initial');
            }}
          />
        </motion.div>
      </div>
      <div className='flex flex-col gap-8 pl-12 flex-1'>
        <div>
          <p className='uppercase text-neutral-500 mb-1'>{subtitle}</p>
          <h3 className='text-3xl font-medium leading-[3.5rem]'>{title}</h3>
        </div>
        <p>{description}</p>
        <motion.div
          className='flex items-center gap-2 w-fit cursor-pointer'
          animate={controls}
          onMouseEnter={() => {
            controls.start('hover');
          }}
          onMouseLeave={() => {
            controls.start('initial');
          }}
        >
          <motion.div
            className='border border-black w-[25px] h-[1px]'
            variants={lineVariants}
          ></motion.div>
          <Link href={`/project/${href}`} className='w-fit'>
            View Project
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectOverview;
