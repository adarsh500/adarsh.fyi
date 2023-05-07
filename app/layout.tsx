'use client';
import { Inter } from 'next/font/google';
import '../styles/globals.scss';
import { usePathname } from 'next/navigation';
import Footer from '@components/Footer';
import Navbar from './nav';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
    console.log(pathname)
  const hide =
    pathname === '/blog/[slug]' || pathname === '/blog' ? true : false;

  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
