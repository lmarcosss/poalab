import React from 'react';
import { Box } from '@chakra-ui/react';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import SwiperCore, { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/core';
import { Banner } from '../Banner';

SwiperCore.use([Navigation, Pagination, Keyboard, Autoplay]);

export function Swiper() {
  return (
    <Box zIndex="1" flex="1" w="100%" mt="18">
      <SwiperReact
        slidesPerView={1}
        centeredSlides
        navigation
        loop
        pagination
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Banner
            title="Atenção!"
            subtitle="Estamos mudando de sala!"
            heading="Continuaremos no campus Porto Alegre do IFRS, voltaremos em breve."
            slug="estamos-mudando-de-sala"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            title="Open Day"
            subtitle="Nas sextas-feiras das 14h às 18h!"
            heading="O poaLAB estará aberto para visitação da comunidade externa."
            slug="open-day"
          />
        </SwiperSlide>
      </SwiperReact>
    </Box>
  );
}
