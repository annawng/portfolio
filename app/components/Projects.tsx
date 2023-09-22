import ProjectOverview from './ProjectOverview';

const projectList = [
  {
    title: 'ARC Design System',
    subtitle: 'UX Engineering Intern',
    description: 'Building components and improving accessibility.',
    imageSrc: '/arc.png',
    href: 'arc-design-system',
  },
  {
    title: 'Leon Coffee House',
    subtitle: 'Developer',
    description:
      'Worked on a team of designers and developers to build a website for a local coffee shop.',
    imageSrc: '/leon.png',
    href: 'leon-coffee-house',
  },
  {
    title: 'Playlist Generator',
    subtitle: 'Designer & Developer',
    description:
      'Website for generating playlists with recommended songs that can be exported to Spotify.',
    imageSrc: '/playlist.png',
    href: 'leon-coffee-house',
  },
  {
    title: 'News Homepage',
    subtitle: 'Developer',
    description: 'Responsive CSS layout practice.',
    imageSrc: '/news.png',
    href: 'leon-coffee-house',
  },
];

const Projects = () => {
  return (
    <section id='projects' className='p-16'>
      <h2 className='text-4xl mb-8'>Projects</h2>
      <div className='flex flex-col gap-24'>
        {projectList.map((project, index) => (
          <ProjectOverview {...project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;