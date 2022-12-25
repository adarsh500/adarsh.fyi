import Layout from '@components/Layout';
import { AppProps } from 'next/app';
import '../styles/globals.scss';
import { Analytics } from '@vercel/analytics/react';

// import { Inter } from '@next/font/google';
// const inter = Inter();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <main className={inter.className}>
    <Layout>
      <>
        <Component {...pageProps} />
        <Analytics />
      </>
    </Layout>
    // </main>
  );
}

export default MyApp;
