'use client';
import {
  useRef,
  useContext,
  createContext,
  ReactElement,
  RefObject,
} from 'react';

import NavBar from './NavBar';
import Footer from './Footer';

export type RefTypes = {
  aboutRef: RefObject<HTMLElement> | null;
  experienceRef: RefObject<HTMLElement> | null;
  projectsRef: RefObject<HTMLElement> | null;
};

const RefContext = createContext<RefTypes>({
  aboutRef: null,
  experienceRef: null,
  projectsRef: null,
});

export const useRefContext = () => useContext(RefContext);

export default function AppWrapper({ children }: { children: ReactElement }) {
  const refs = {
    aboutRef: useRef<HTMLElement>(null),
    experienceRef: useRef<HTMLElement>(null),
    projectsRef: useRef<HTMLElement>(null),
  };

  return (
    <RefContext.Provider value={refs}>
      <header className='max-w-screen-xl m-auto'>
        <NavBar />
      </header>
      <main className='max-w-screen-xl m-auto'>{children}</main>
      <Footer />
    </RefContext.Provider>
  );
}
