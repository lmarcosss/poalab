import { Box } from '@chakra-ui/react';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import SwiperCore, { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Keyboard, Autoplay]);

export function Swiper({ items, Component }) {
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
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <Component {...item} />
          </SwiperSlide>
        ))}
      </SwiperReact>
    </Box>
  );
}
