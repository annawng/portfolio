import Image from 'next/image';

const Leon = () => {
  return (
    <>
      <Image src='/leon-cover.png' width={3840} height={2160} alt='' />
      <div className='px-8 sm:px-16'>
        <div className='max-w-screen-lg m-auto'>
          <section className='flex flex-col lg:flex-row gap-12 justify-between py-16'>
            <div>
              <h1 className='text-5xl font-bold mb-4'>Leon Coffee House</h1>
              <p className='mb-4 max-w-xl'>
                Web Impact UW &#40;previously{' '}
                <a
                  href='https://dubvelopersuw.org/'
                  target='_blank'
                  className='text-primary hover:text-primary-focus'
                >
                  DUBvelopers
                </a>
                &#41; is a student organization at the University of Washington
                that creates websites for local organizations and underserved
                communities. As part of this club, my team designed and
                developed a website for Leon Coffee House, a local family-owned
                Mexican café popular among UW students.
              </p>
              <div className='flex gap-2 mt-6'>
                <a
                  href='http://leoncoffeehouse.com/'
                  target='_blank'
                  className='button button-primary'
                >
                  Live Site
                </a>
                <a
                  href='https://github.com/webimpactuw/Leon-Cafe'
                  target='_blank'
                  className='button button-secondary'
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className='flex flex-col gap-6'>
              <div>
                <p className='font-bold uppercase text-xs'>Role</p>
                <p>Frontend Developer</p>
              </div>
              <div>
                <p className='font-bold uppercase text-xs'>Team</p>
                <ul>
                  <li>1 Project Manager</li>
                  <li>4 UI Designers</li>
                  <li>4 Frontend Developers</li>
                </ul>
              </div>
              <div>
                <p className='font-bold uppercase text-xs'>Time Frame</p>
                <p>January &ndash; March 2023</p>
              </div>
              <div>
                <p className='font-bold uppercase text-xs'>Tools</p>
                <ul>
                  <li>React</li>
                  <li>CSS</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Leon;
