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
        <a href={companyLink} target='_blank'>
          {company}
        </a>
      </h3>
      <p>{`${startDate} — ${endDate}`}</p>
      <p className='mt-1.5 mb-3'>{description}</p>
      <SkillList skills={skills} />
    </div>
  );
};

export default ExperienceDetails;
