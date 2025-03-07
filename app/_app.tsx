import { useEffect } from 'react';
import ReactGtm from 'react-gtm-module';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    ReactGtm.initialize({ gtmId: 'GTM-NLK4RWTG' });
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
