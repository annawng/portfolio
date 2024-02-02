'use client';
import ExperienceDetails from './ExperienceDetails';

const experiences = [
  {
    position: 'CSE 484 Teaching Assistant',
    company: 'UW Allen School',
    companyLink: 'https://www.cs.washington.edu/',
    startDate: 'January 2024',
    endDate: 'Present',
    description:
      'Lead weekly quiz sections to teach 30+ students conceptual and technical aspects of computer security. Offer one-on-one conceptual and debugging assistance to students in office hours 2 times a week. Proactively monitor and answer questions on Ed discussion board relating to assignments and security concepts. Grade homework assignments, delivering specific and actionable feedback to enhance the learning experience.',
    skills: ['C', 'GDB', 'SQL', 'HTML'],
  },
  {
    position: 'UX Engineering Intern (Design Systems)',
    company: 'Mark43',
    companyLink: 'https://mark43.com/',
    startDate: 'June 2023',
    endDate: 'September 2023',
    description:
      'Integrated automated accessibility check into component library Jest unit tests to ensure WCAG compliance. Fixed accessibility issues across 32 components and documented proper use of ARIA attributes in Storybook. Owned end-to-end development in Figma and React with TypeScript of 7 UI components pushed into production. Actively contributed to ideation and creation of 2 Figma prototypes for digital signature collection workflows.',
    skills: [
      'React',
      'TypeScript',
      'Storybook',
      'styled-components',
      'Jest',
      'Chakra UI',
    ],
  },
  {
    position: 'Accessibility Student Assistant',
    company: 'UW-IT',
    companyLink: 'https://itconnect.uw.edu/',
    startDate: 'October 2022',
    endDate: 'April 2023',
    description:
      'Provided accessibility consulting to over 10 companies, including Zoom and Microsoft. Conducted comprehensive technical and functional accessibility testing on websites and desktop applications. Compiled and presented detailed, structured reports to developers and designers with actionable insights.',
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
        <h2 className='text-4xl font-semibold'>Experience</h2>
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
