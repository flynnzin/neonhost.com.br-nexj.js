import { useEffect } from 'react';
const ReactGtm = require('react-gtm-module');

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    ReactGtm.initialize({ gtmId: 'GTM-NLK4RWTG' });
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
