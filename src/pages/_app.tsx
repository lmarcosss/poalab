import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';

import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';
import { theme } from '../styles/themes';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>poaLAB</title>
      </Head>

      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
