import React from 'react';

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
  return (
    <div className='flex justify-between items-center w-full overflow-hidden'>
      <div className='overflow-hidden w-7/12 bg-gray-100 p-12 flex justify-center'>
        <Image
          src={imageSrc}
          width={1080}
          height={675}
          alt=''
          className='w-full object-cover hover:scale-105 duration-200 drop-shadow-2xl cursor-pointer'
        />
      </div>
      <div className='flex flex-col gap-8 pl-12 flex-1'>
        <div>
          <p className='uppercase text-neutral-500 mb-1'>{subtitle}</p>
          <h3 className='text-3xl font-medium leading-[3.5rem]'>{title}</h3>
        </div>
        <p>{description}</p>
        <Link href={`/project/${href}`} className='w-fit'>
          View Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectOverview;
