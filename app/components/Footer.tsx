const Footer = () => {
  return (
    <footer className='px-8 md:px-16 py-12 flex flex-col gap-8 md:flex-row md:justify-between md:items-center'>
      <div className='max-w-screen-sm w-full m-auto flex flex-col gap-14'>
        <div>
          <div className='flex items-center gap-2 font-medium'>
            <a
              href='https://github.com/annawng'
              target='_blank'
              className='custom-underline footer-underline'
            >
              GitHub
            </a>
            <p className='text-xs md:text-sm' aria-hidden>
              ✧
            </p>
            <a
              href='https://www.linkedin.com/in/annagwang/'
              target='_blank'
              className='custom-underline footer-underline'
            >
              LinkedIn
            </a>
            <p className='text-xs md:text-sm' aria-hidden>
              ✧
            </p>
            <a
              href='mailto:wanganna@uw.edu'
              target='_blank'
              className='custom-underline footer-underline'
            >
              Email
            </a>
          </div>
          <p className='text-xs font-light mt-2'>
            Website built with Figma, Next.js, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
