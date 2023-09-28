import Image from 'next/image';

const Leon = () => {
  return (
    <div className='pt-24 px-16'>
      <h1 className='text-3xl mb-8'>Leon Coffee House</h1>
      <p className='max-w-xl'>
        <a href='https://dubvelopersuw.org/' target='_blank'>
          DUBvelopers
        </a>{' '}
        is a student organization at the University of Washington that creates
        websites for local organizations and underserved communities. My team
        designed and developed a website for a local family-owned Mexican coffee
        house, Leon Coffee House.
      </p>

      <div className='flex gap-4 mt-4 mb-16'>
        <a
          href='http://leoncoffeehouse.com/'
          target='_blank'
          className='btn btn-primary text-white normal-case'
        >
          Live Site
        </a>
        <a
          href='https://github.com/webimpactuw/Leon-Cafe'
          target='_blank'
          className='btn btn-primary btn-outline normal-case'
        >
          Code
        </a>
      </div>
      <Image src='/leon-full.png' width={3000} height={7998} alt='' />
    </div>
  );
};

export default Leon;
