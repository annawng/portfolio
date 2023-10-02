'use client';
import ExperienceDetails from './ExperienceDetails';

const experiences = [
  {
    position: 'UX Engineering Intern',
    company: 'Mark43',
    companyLink: 'https://mark43.com/',
    startDate: 'June 2023',
    endDate: 'September 2023',
    description:
      'Integrated an accessibility audit into the design system. Fixed accessibility issues and Storybook bugs. Designed, developed, and documented 7 components pushed into production.',
    skills: ['React', 'TypeScript', 'Storybook', 'styled-components'],
  },
  {
    position: 'Accessibility Student Assistant',
    company: 'UW-IT',
    companyLink: 'https://itconnect.uw.edu/',
    startDate: 'October 2022',
    endDate: 'April 2023',
    description:
      'Provided accessibility consulting to companies such as Zoom and Microsoft. Performed technical and functional accessibility testing on websites and desktop applications, then compiled and presented reports to developers and designers. Scheduled and led meetings with clients.',
    skills: ['HTML', 'CSS', 'WCAG', 'ARIA'],
  },
];

const Experience = () => {
  return (
    <section
      id='experience'
      className='flex flex-col md:flex-row gap-8 px-8 md:px-16 py-16'
    >
      <div className='flex-1'>
        <h2 className='text-4xl'>Experience</h2>
      </div>
      <div className='flex-1 flex flex-col gap-8'>
        {experiences.map((experience, index) => (
          <ExperienceDetails {...experience} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
