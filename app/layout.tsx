import './globals.css';
import type { Metadata } from 'next';

import { Providers } from './theme/Providers';
import { font } from './fonts';
import AppWrapper from './components/AppWrapper';

export const metadata: Metadata = {
  title: 'Anna Wang',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={font.className}>
        <Providers>{<AppWrapper>{children}</AppWrapper>}</Providers>
      </body>
    </html>
  );
}
