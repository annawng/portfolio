import React from 'react';

type SkillProps = {
  text: string;
};

const Skill = ({ text }: SkillProps) => {
  return (
    <div className='badge badge-outline badge-primary text-xs py-3'>{text}</div>
  );
};

export default Skill;
