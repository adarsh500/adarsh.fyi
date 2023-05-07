import { Inter } from 'next/font/google';
import '../styles/globals.scss';
import styles from './Layout.module.scss';
import Footer from '@components/Footer';
import Navbar from './nav';
import NowPlaying from '@components/NowPlaying';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body suppressHydrationWarning={true}>
        <div className={styles.container}>
          <Navbar />
          {children}
          <div className={styles.nowPlaying}>
            <NowPlaying />
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
