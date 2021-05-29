import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/themes';
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';
import { Header } from '../components/Header';
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Header />
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
