import Image from 'next/image';

const SpotifyPlaylistGenerator = () => {
  return (
    <div className='max-w-screen-sm m-auto'>
      <h1 className='text-xl font-medium mb-4'>Spotify Playlist Generator</h1>
      <p className='max-w-xl'>
        A responsive web app that lets a user search for a song, then provides
        song recommendations based on the selected song. The user can then add
        these recommendations to a playlist and export it to Spotify by
        connecting their account.
      </p>

      <div className='flex gap-2 mt-4 mb-12'>
        <a
          href='https://playlistgenerator.netlify.app/'
          target='_blank'
          className='btn btn-primary'
        >
          Live Site
        </a>
        <a
          href='https://github.com/annawng/spotify-playlist-generator'
          target='_blank'
          className='btn btn-secondary'
        >
          Code
        </a>
      </div>
      <Image
        src='/playlist-generator-full.jpg'
        width={2464}
        height={9562}
        alt=''
      />
    </div>
  );
};

export default SpotifyPlaylistGenerator;
