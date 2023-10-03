import './globals.css';
import type { Metadata } from 'next';

import { Providers } from './theme/Providers';
import { inter } from './fonts';
import AppWrapper from './components/AppWrapper';

export const metadata: Metadata = {
  title: 'Anna Wang',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className='scroll-pt-8 scroll-smooth'
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <Providers>
          <AppWrapper>{children}</AppWrapper>
        </Providers>
      </body>
    </html>
  );
}
