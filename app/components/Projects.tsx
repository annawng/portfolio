import ProjectOverview from './ProjectOverview';

const projectList = [
  {
    title: 'Almost Spotify',
    subtitle: 'Designer & Developer',
    description: 'Built a Spotify clone.',
    imageSrc: '/almost-spotify.jpg',
    href: 'almost-spotify',
  },
  {
    title: 'Leon Coffee House',
    subtitle: 'Developer',
    description:
      'Worked on a team of designers and developers to build a website for a local coffee shop.',
    imageSrc: '/leon.jpg',
    href: 'leon-coffee-house',
  },
  {
    title: 'Spotify Playlist Generator',
    subtitle: 'Designer & Developer',
    description:
      'Created a web app for generating playlists of song recommendations that can be exported to Spotify.',
    imageSrc: '/playlist.jpg',
    href: 'spotify-playlist-generator',
  },
];

const Projects = () => {
  return (
    <section id='projects' className='px-8 md:px-16 py-16'>
      <h2 className='text-4xl font-semibold mb-8'>Projects</h2>
      <div className='flex flex-col gap-24'>
        {projectList.map((project, index) => (
          <ProjectOverview {...project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
