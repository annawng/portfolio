const Footer = () => {
  return (
    <footer className='flex justify-between items-center pt-32 pb-16 px-16 text-sm max-w-screen-xl m-auto'>
      <div>
        <p>Email —</p>
        <p className='text-gray-700 hover:underline'>
          <a
            href='mailto:annawang125@gmail.com'
            target='_blank'
            className='hover:underline'
          >
            annawang125@gmail.com
          </a>
        </p>
      </div>
      <div>
        <p>Socials —</p>
        <div className='text-gray-700'>
          <a
            href='https://www.linkedin.com/in/annagwang/'
            target='_blank'
            className='hover:underline '
          >
            LinkedIn
          </a>
          ,{' '}
          <a
            href='https://github.com/annawng'
            target='_blank'
            className='hover:underline'
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
