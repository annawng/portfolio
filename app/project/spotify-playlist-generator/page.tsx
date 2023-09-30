import Image from 'next/image';

const SpotifyPlaylistGenerator = () => {
  return (
    <div className='pt-24 px-8 md:px-16'>
      <h1 className='text-3xl mb-8'>Spotify Playlist Generator</h1>
      <p className='max-w-xl'>
        Responsive web app that recommends songs based on the song selected by
        the user. The user can then add these recommendations to a playlist and
        export it to Spotify after connecting their account.
      </p>

      <div className='flex gap-2 mt-4 mb-16'>
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
        src='/playlist-generator-full.png'
        width={2464}
        height={9562}
        alt=''
      />
    </div>
  );
};

export default SpotifyPlaylistGenerator;
