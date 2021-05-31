import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
        'scroll-behavior': 'smooth',
        overflowY: 'scroll',
        'overflow-y': 'scroll',
      },
      body: {
        bg: 'white',
        color: 'gray.600',
      },
      '.swiper-pagination-bullet': {
        backgroundColor: 'green.500',
      },
      '.swiper-button-prev:after': {
        color: 'green.500',
        fontSize: ['30px', '40px', '50px'],
        paddingHorizontal: '10px',
      },
      '.swiper-button-next:after': {
        color: 'green.500',
        fontSize: ['30px', '40px', '50px'],
        paddingHorizontal: '10px',
      },
    },
  },
});
