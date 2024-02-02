const Footer = () => {
  return (
    <footer className='flex flex-col gap-8 pt-16 pb-8 md:flex-row md:justify-between md:items-center md:pt-32 md:pb-16 px-8 md:px-16 text-sm max-w-screen-xl m-auto'>
      <div>
        <p>Email —</p>
        <p className='text-neutral hover:underline'>
          <a
            href='mailto:wanganna@uw.edu'
            target='_blank'
            className='hover:underline'
          >
            wanganna@uw.edu
          </a>
        </p>
      </div>
      <div>
        <p>Socials —</p>
        <div className='text-neutral'>
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
