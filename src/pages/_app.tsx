/* eslint-disable @next/next/inline-script-id */
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { appWithTranslation } from 'next-i18next';

import { withSWRConfig } from '@/pods/swr';
import AppHead from '@/scenes/App/AppHead';
import { globalStyles } from '@/styles';

interface Props extends AppProps {
  Component: any;
  pageProps: {
    fallback?: Record<string, unknown>;
  };
}

function App({ Component, pageProps: { fallback, ...pageProps } = {} }: Props) {
  globalStyles();

  const component = <Component {...pageProps} />;
  const enhancedComponent = fallback
    ? withSWRConfig(fallback, component)
    : component;

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-Y295S344PT', {
        page_path: window.location.pathname,
        });
    `}
      </Script>

      <AppHead />
      {enhancedComponent}
    </>
  );
}

export default appWithTranslation(App as any);
