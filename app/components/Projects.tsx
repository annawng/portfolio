import ProjectOverview from './ProjectOverview';

const projectList = [
  {
    title: 'Leon Coffee House',
    subtitle: 'Developer',
    description:
      'Worked on a team of designers and developers to build a website for a local coffee shop.',
    imageSrc: '/leon.png',
    href: 'leon-coffee-house',
  },
  {
    title: 'Spotify Playlist Generator',
    subtitle: 'Designer & Developer',
    description:
      'Created a web app for generating playlists of song recommendations that can be exported to Spotify.',
    imageSrc: '/playlist.png',
    href: 'spotify-playlist-generator',
  },
  {
    title: 'News Homepage',
    subtitle: 'Developer',
    description: 'Implemented a responsive homepage for a news site.',
    imageSrc: '/news.png',
    href: 'news-homepage',
  },
];

const Projects = () => {
  return (
    <section id='projects' className='px-8 md:px-16 py-16'>
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
