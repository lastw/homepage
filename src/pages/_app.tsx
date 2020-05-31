import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { run } from 'utils/particles';
import { Layout } from 'components/layout';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    run();
  }, []);

  return (
    <>
      <Head>
        <title>Lastw homepage</title>
        <link href="/favicon.png" rel="shortcut icon"></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <style jsx global>{`
        html,
        body {
          height: 100%;
          margin: 0;
          background: #000;
          color: #fff;
        }

        * {
          box-sizing: border-box;
        }

        body > div {
          height: 100%;
        }

        .root {
          position: relative;
          height: 100%;
        }

        #background {
          z-index: 0;
          position: fixed;
          top: 0;
          left: 0;
          background: #000;
          opacity: 0.5;
        }

        .content {
          min-height: 100%;
          position: relative;
          z-index: 1;
          padding: 32px;
        }
      `}</style>
    </>
  );
}
