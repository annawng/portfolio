import Image from 'next/image';

const ArcAccessibility = () => {
  return (
    <div className='pt-24 px-16'>
      <h1 className='text-3xl mb-4'>ARC Design System Accessibility</h1>

      <p>Overview</p>
      <p className='max-w-xl'>
        While interning at Mark43 on the Design Systems team, I was tasked with
        analyzing the ecosystem for accessibility
        {/* established an accessibility
        baseline for the design system, integrated an accessibility check into
        the ??? CI/CD or automated pipeline or something ???, and fixed
        accessibility issues. */}
      </p>

      <div>
        <div>
          <p>Role</p>
          <p>Developer</p>
        </div>
        <div>
          <p>Company</p>
          <p>Mark43</p>
        </div>
        <div>
          <p>Year</p>
          <p>2023</p>
        </div>
      </div>

      <div className='flex flex-col gap-4 my-8'>
        <h2>Problem</h2>
        <div>
          <p>
            The ARC component library did not have baseline tests for
            accessibility. Since an accessible product is more easily achieved
            when built with an accessible design system, it is important to
            ensure that all our components are accessible.
          </p>
          <p>
            Storybook, the platform we use to document our design system,
            displays accessibility issues for each component, but this
            information is not centralized. We also noticed that certain issues
            were not showing up.
          </p>
        </div>
        <h2>Solution</h2>
        <div>
          <p>
            I started by researching automated accessibilty testing tools. Many
            were built on axe-core, an accessibility testing engine that
          </p>
          <p>Then, I </p>
          <p></p>
          <p></p>
        </div>
        <h2>Results</h2>
        <ul>
          <li>Established a baseline for accessibility</li>
          <li>
            Components are audited for accessibility every time code is pushed
          </li>
          <li>
            All components are meeting the accessibility baseline, with a few
            documented exceptions
          </li>
          <li>
            Documentation for cases where consumer must use ARIA attributes
          </li>
        </ul>
      </div>
      {/* <Image src='/leon-full.png' width={3000} height={7998} alt='' /> */}
    </div>
  );
};

export default ArcAccessibility;
