const Footer = () => {
  return (
    <footer className='px-8 md:px-16 flex flex-col gap-8 md:flex-row md:justify-between md:items-center text-sm bg-neutral-900 text-white'>
      <div className='max-w-screen-lg w-full py-12 md:py-16 m-auto flex flex-col gap-14 md:gap-28'>
        <div>
          <p className='text-3xl md:text-6xl font-bold mb-4'>
            Let&apos;s talk!
          </p>
          <p className='text-lg md:text-3xl font-bold text-neutral-400 max-w-sm md:max-w-lg'>
            Feel free to check out my GitHub, connect on LinkedIn, or email me
            at wanganna@uw.edu.
          </p>
        </div>
        <div>
          <div className='flex items-center gap-2 text-md md:text-lg font-bold'>
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
          <p className='text-xs md:text-base font-light text-neutral-400 mt-2'>
            Website built with Figma, Next.js, Tailwind CSS, and many hours of
            my life.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
