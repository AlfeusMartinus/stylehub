import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>StyleHub - Product Marketplace</title>
        <meta name='title' content='StyleHub - Product Marketplace' />
        <meta name='description' content='StyleHub - Product Marketplace' />
        <meta name='keywords' content='shopee, product, afiliate' />
        <meta name='robots' content='index, follow' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={process.env.NEXT_PUBLIC_MAIN_URL} />
        <meta property='og:title' content='StyleHub - Product Marketplace' />
        <meta property='og:description' content='StyleHub - Product Marketplace' />
        <meta
          property='og:image'
          content={process.env.NEXT_PUBLIC_MAIN_URL + 'logo.png'}
        />

        <meta property='og:locale' content='id' />
        <meta property='og:image:alt' content='logo' />
        <meta property='og:image:type' content='png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content={process.env.NEXT_PUBLIC_MAIN_URL}
        />
        <meta property='twitter:title' content='StyleHub - Product Marketplace' />
        <meta property='twitter:description' content='StyleHub - Product Marketplace' />
        <meta
          property='twitter:image'
          content={process.env.NEXT_PUBLIC_MAIN_URL + 'logo.png'}
        />
        <link rel='shortcut icon' href='/favicon.svg' type='image/x-icon' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
