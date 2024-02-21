import Image from 'next/image';

const Leon = () => {
  return (
    <div className='pt-24 pb-16 md:py-32 max-w-screen-lg m-auto'>
      <h1 className='text-3xl font-bold mb-4 md:mb-8'>Leon Coffee House</h1>
      <p className='mb-4 md:mb-8 max-w-xl'>
        <a
          href='https://dubvelopersuw.org/'
          target='_blank'
          className='text-primary hover:text-primary-focus'
        >
          DUBvelopers
        </a>{' '}
        &#40;now named Web Impact UW&#41; is a student organization at the
        University of Washington that creates websites for local organizations
        and underserved communities. My team designed and developed a website
        for a local family-owned Mexican coffee house, Leon Coffee House.
      </p>

      <div className='flex gap-2 mt-4 mb-12 md:mb-16'>
        <a
          href='http://leoncoffeehouse.com/'
          target='_blank'
          className='btn btn-primary'
        >
          Live Site
        </a>
        <a
          href='https://github.com/webimpactuw/Leon-Cafe'
          target='_blank'
          className='btn btn-secondary'
        >
          Code
        </a>
      </div>
      <Image src='/leon-full.jpg' width={3000} height={7998} alt='' />
    </div>
  );
};

export default Leon;
