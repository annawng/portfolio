import React from 'react';

import SkillList from './SkillList';

type ExperienceDetailsProps = {
  position: string;
  company: string;
  companyLink: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
};

const ExperienceDetails = ({
  position,
  company,
  companyLink,
  startDate,
  endDate,
  description,
  skills,
}: ExperienceDetailsProps) => {
  return (
    <div>
      <h3 className='font-semibold text-lg'>
        {`${position} @ `}
        <a
          href={companyLink}
          target='_blank'
          className='duration-200 hover:text-primary group inline-flex items-center gap-2'
        >
          {company}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='6 6 20 20'
            aria-hidden='true'
            className='w-2 h-2 transition-transform fill-base-content group-hover:fill-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
          >
            <path d='M10 6v2h12.59L6 24.59 7.41 26 24 9.41V22h2V6H10z' />
          </svg>
        </a>
      </h3>
      <p>{`${startDate} — ${endDate}`}</p>
      <p className='my-3'>{description}</p>
      <SkillList skills={skills} />
    </div>
  );
};

export default ExperienceDetails;
