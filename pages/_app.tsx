import { AppProps } from 'next/app';
import '../styles/globals.scss';

// import { Inter } from '@next/font/google';
// const inter = Inter();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <main className={inter.className}>
    <Component {...pageProps} />
    // </main>
  );
}

export default MyApp;
