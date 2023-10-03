'use client';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { useRefContext } from './components/AppWrapper';

export default function Home() {
  const { aboutRef, experienceRef, projectsRef } = useRefContext();
  return (
    <>
      <Hero />
      <About ref={aboutRef} />
      <Experience ref={experienceRef} />
      <Projects ref={projectsRef} />
    </>
  );
}
