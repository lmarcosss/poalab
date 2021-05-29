import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      html: {
        'scroll-behavior': 'smooth',
      },
      body: {
        bg: 'white',
        color: 'gray.600',
      },
    },
  },
});
