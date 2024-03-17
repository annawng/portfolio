import ProjectOverview from './ProjectOverview';

const projectList = [
  {
    title: 'SmartNote',
    subtitle: 'Developer',
    description: 'LLM-powered note-taking application.',
    imageSrc: '/smartnote.jpg',
    href: 'smartnote',
  },
  {
    title: 'Almost Spotify',
    subtitle: 'Designer & Developer',
    description: 'A Spotify clone? Not quite, but almost.',
    imageSrc: '/almost-spotify.jpg',
    href: 'almost-spotify',
  },
  {
    title: 'Leon Coffee House',
    subtitle: 'Developer',
    description: 'Website for a local coffee shop.',
    imageSrc: '/leon.jpg',
    href: 'leon-coffee-house',
  },
];

const Projects = () => {
  return (
    <section className='py-12 px-8 sm:px-16'>
      <div className='max-w-screen-lg m-auto flex flex-col gap-16'>
        {projectList.map((project, index) => (
          <ProjectOverview {...project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
