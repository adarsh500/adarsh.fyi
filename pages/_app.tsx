import Layout from '@components/Layout';
import { AppProps } from 'next/app';
import '../styles/globals.scss';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <>
        <Component {...pageProps} />
        <Analytics />
      </>
    </Layout>
  );
}

export default MyApp;
