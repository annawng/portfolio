import Image from 'next/image';

const AlmostSpotify = () => {
  return (
    <div className='max-w-screen-sm m-auto'>
      <h1 className='text-2xl font-medium mb-4'>Almost Spotify</h1>
      <p className='max-w-xl mb-2'>
        A responsive Spotify clone built with Next.js, TypeScript, and Tailwind
        CSS. It uses NextAuth for authentication, the Spotify API to fetch data
        about tracks, albums, playlists, and the currrent user, and the Spotify
        Web Playback SDK to control playback in the application. Users are
        required to log in with a Spotify Premium account.
      </p>
      <p className='max-w-xl'>
        Because this application is in{' '}
        <a
          href='https://developer.spotify.com/documentation/web-api/concepts/quota-modes'
          target='_blank'
          className='text-primary hover:text-primary-focus'
        >
          development mode
        </a>{' '}
        and would require all users to be added to an allowlist, it is not
        deployed publicly.
      </p>

      <div className='flex gap-2 mt-4 mb-12'>
        <a
          href='https://github.com/annawng/almost-spotify/tree/main'
          target='_blank'
          className='btn btn-secondary'
        >
          Code
        </a>
      </div>
      <div className='flex flex-col gap-8'>
        <section>
          <h2 className='text-xl font-medium mb-4'>Login</h2>
          <Image
            src='/almost-spotify-login.gif'
            width={3000}
            height={1704}
            alt=''
          />
        </section>
        <section>
          <h2 className='text-xl font-medium mb-4'>Home</h2>
          <Image
            src='/almost-spotify-home.gif'
            width={3000}
            height={1704}
            alt=''
          />
        </section>
        <section>
          <h2 className='text-xl font-medium mb-4'>
            Search & Playback Controls
          </h2>
          <Image
            src='/almost-spotify-search.gif'
            width={3000}
            height={1704}
            alt=''
          />
        </section>
        <section>
          <h2 className='text-xl font-medium mb-4'>Library</h2>
          <Image
            src='/almost-spotify-library.gif'
            width={3000}
            height={1704}
            alt=''
          />
        </section>
        <section>
          <h2 className='text-xl font-medium mb-4'>Playlists</h2>
          <Image
            src='/almost-spotify-playlists.gif'
            width={3000}
            height={1704}
            alt=''
          />
        </section>
        <section>
          <h2 className='text-xl font-medium mb-4'>Responsive Design</h2>
          <Image
            src='/almost-spotify-responsive.gif'
            width={3000}
            height={1704}
            alt=''
          />
        </section>
      </div>
    </div>
  );
};

export default AlmostSpotify;
