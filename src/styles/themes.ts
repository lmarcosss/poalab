import { extendTheme } from '@chakra-ui/react';
import componentsStyles from '../components/styles';

export const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      html: {
        width: '100%',
        scrollBehavior: 'smooth',
        overflowY: 'auto',
      },
      body: {
        width: '100%',
        bg: 'white',
        color: 'gray.600',
      },
      ...componentsStyles,
    },
  },
});
