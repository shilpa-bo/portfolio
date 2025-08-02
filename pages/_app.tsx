import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/globals.css';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Coming+Soon&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
