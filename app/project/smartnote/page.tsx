import Image from 'next/image';

const SmartNote = () => {
  return (
    <>
      <Image src='/smartnote-cover.png' width={3840} height={2160} alt='' />
      <div className='px-8 sm:px-16 pt-20'>
        <div className='max-w-screen-lg m-auto'>
          <h1 className='text-5xl font-medium mb-4'>SmartNote</h1>
          <p className='max-w-xl mb-2'>More info coming soon!</p>

          <div className='flex gap-2 mt-4 mb-12'>
            <a
              href='https://github.com/davidpak/smartnote'
              target='_blank'
              className='button button-secondary'
            >
              GitHub
            </a>
          </div>
          <div className='flex flex-col gap-8'></div>
        </div>
      </div>
    </>
  );
};

export default SmartNote;
