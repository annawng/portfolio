import Image from 'next/image';

const NewsHomepage = () => {
  return (
    <div className='pt-24 px-8 md:px-16'>
      <h1 className='text-3xl mb-8'>News Homepage</h1>
      <p className='max-w-xl'>
        A{' '}
        <a
          href='https://www.frontendmentor.io/'
          target='_blank'
          className='text-primary hover:text-primary-focus'
        >
          Frontend Mentor
        </a>{' '}
        challenge where I built out a responsive news website homepage from the
        given design files to practice using CSS Grid for layout.
      </p>

      <div className='flex gap-2 mt-4 mb-16'>
        <a
          href='https://news-homepage-annawng.netlify.app/'
          target='_blank'
          className='btn btn-primary'
        >
          Live Site
        </a>
        <a
          href='https://github.com/annawng/frontend-mentor-challenges/tree/master/news-homepage-main'
          target='_blank'
          className='btn btn-secondary'
        >
          Code
        </a>
      </div>
      <Image src='/news-full.png' width={3000} height={1704} alt='' />
    </div>
  );
};

export default NewsHomepage;
