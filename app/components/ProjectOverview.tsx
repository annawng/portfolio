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
      <div className='overflow-hidden flex justify-center md:w-7/12 rounded-2xl'>
        <motion.div
          animate={controls}
          variants={imageVariants}
          transition={{ ease: 'easeInOut' }}
          className=''
        >
          <Link href={`/project/${href}`}>
            <Image
              src={imageSrc}
              width={1080}
              height={675}
              alt=''
              className='w-full max-w-20 object-cover cursor-pointer'
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
      <div className='flex flex-col gap-3 md:pl-12 flex-1 mt-8 md:mt-0'>
        <div>
          <p className='text-sm uppercase text-stone-500'>{subtitle}</p>
          <h3 className='text-xl font-semibold mt-1'>{title}</h3>
        </div>
        <p className='text-stone-600'>{description}</p>

        <Link
          href={`/project/${href}`}
          className='button button-primary w-fit md:hidden'
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
            className='flex items-center gap-2 w-fit text-sm'
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
