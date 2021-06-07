import { GetStaticProps } from 'next';
import { Box, Text } from '@chakra-ui/react';

import { Swiper } from '../components/Swiper';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Banner } from '../components/Banner';

export default function Home({ posts }) {
  return (
    <Box>
      <Header />
      <Swiper Component={Banner} items={posts} />

      <Text
        fontWeight="medium"
        h="512"
        display="flex"
        alignItems="center"
        justifyContent="center"
        id="about"
        name="about"
      >
        Sobre
      </Text>
      <Text
        fontWeight="medium"
        h="512"
        display="flex"
        alignItems="center"
        justifyContent="center"
        id="work-space"
        name="work-space"
      >
        Espaço
      </Text>
      <Text
        fontWeight="medium"
        h="512"
        display="flex"
        alignItems="center"
        justifyContent="center"
        id="equipments"
        name="equipments"
      >
        Equipamentos
      </Text>
      <Text
        fontWeight="medium"
        h="512"
        display="flex"
        alignItems="center"
        justifyContent="center"
        id="links"
        name="links"
      >
        Links úteis
      </Text>

      <Footer />
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${process.env.API_ENDPOINT}/api/posts`);
  const data = await response.json();

  return {
    props: {
      posts: data.result,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
