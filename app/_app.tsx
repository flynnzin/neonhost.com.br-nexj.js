import { useEffect } from 'react';
import { AppProps } from 'next/app';
const ReactGtm = require('react-gtm-module');

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    ReactGtm.initialize({ gtmId: 'GTM-NLK4RWTG' });
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
