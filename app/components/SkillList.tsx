import React from 'react';
import Skill from './Skill';

type SkillListProps = {
  skills: string[];
};

const SkillList = ({ skills }: SkillListProps) => {
  return (
    <ul className='flex flex-row gap-2 flex-wrap'>
      {skills.map((skill, index) => (
        <li key={index}>
          <Skill text={skill} />
        </li>
      ))}
    </ul>
  );
};

export default SkillList;
