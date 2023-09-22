import React from 'react';

type SkillProps = {
  text: string;
};

const Skill = ({ text }: SkillProps) => {
  return (
    <div className='whitespace-nowrap w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary '>
      {text}
    </div>
  );
};

export default Skill;
