import { forwardRef, ForwardedRef } from 'react';

import ProjectOverview from './ProjectOverview';

const projectList = [
  {
    title: 'Leon Coffee House',
    subtitle: 'Developer',
    description:
      'Worked on a team of designers and developers to build a website for a local coffee shop.',
    src: '/leon.png',
    href: 'leon-coffee-house',
  },
  {
    title: 'Spotify Playlist Generator',
    subtitle: 'Designer & Developer',
    description:
      'Website for generating playlists with recommended songs that can be exported to Spotify.',
    src: '/playlist.png',
    href: 'spotify-playlist-generator',
  },
  {
    title: 'News Homepage',
    subtitle: 'Developer',
    description: 'Responsive CSS layout practice.',
    src: '/news.png',
    href: 'news-homepage',
  },
];

const Projects = (_: unknown, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section id='projects' ref={ref} className='px-8 md:px-16 py-16'>
      <h2 className='text-4xl mb-8'>Projects</h2>
      <div className='flex flex-col gap-24'>
        {projectList.map((project, index) => (
          <ProjectOverview {...project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default forwardRef(Projects);
