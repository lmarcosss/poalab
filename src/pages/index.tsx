import { Box, Text } from '@chakra-ui/react';
import { Swiper } from '../components/Swiper';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <Box>
      <Header />
      <Swiper />

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
