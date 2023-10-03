'use client';
import { motion, Variants, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type ProjectOverviewProps = {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  href: string;
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

  const textVariants: Variants = {
    initial: { color: 'var(--text)' },
    hover: { color: 'var(--primary)' },
  };

  return (
    <div className='flex flex-col md:flex-row justify-between md:items-center w-full overflow-hidden'>
      <div className='overflow-hidden flex justify-center sm:bg-base-200 sm:p-12 md:w-7/12'>
        <Link href={`/project/${href}`}>
          <Image
            src={imageSrc}
            width={1080}
            height={675}
            alt=''
            className='w-full object-cover md:hidden'
          />
        </Link>
        <motion.div
          animate={controls}
          variants={imageVariants}
          transition={{ ease: 'easeInOut' }}
          className='hidden md:block'
        >
          <Link href={`/project/${href}`}>
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
          </Link>
        </motion.div>
      </div>
      <div className='flex flex-col gap-4 md:gap-8 md:pl-12 flex-1 mt-8 md:mt-0'>
        <div>
          <p className='uppercase text-neutral'>{subtitle}</p>
          <h3 className='text-3xl font-medium mt-2 md:mt-4'>{title}</h3>
        </div>
        <p>{description}</p>

        <Link
          href={`/project/${href}`}
          className='btn btn-primary w-fit md:hidden'
        >
          View Project
        </Link>
        <motion.div
          animate={controls}
          onMouseEnter={() => {
            controls.start('hover');
          }}
          onMouseLeave={() => {
            controls.start('initial');
          }}
          className='hidden md:block'
        >
          <Link
            href={`/project/${href}`}
            className='flex items-center gap-2 w-fit'
          >
            <motion.div
              className='border border-primary w-[25px] h-[1px]'
              variants={lineVariants}
            ></motion.div>
            <motion.p variants={textVariants}>View Project</motion.p>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectOverview;
