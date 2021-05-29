import { Box, Text } from '@chakra-ui/react';
import { Banner } from '../components/Banner';

export default function Home() {
  return (
    <Box>
      <Banner />
      <Text h="1024" display="flex" alignItems="center" justifyContent="center" id="what-is">
        O que é?
      </Text>
      <Text h="1024" display="flex" alignItems="center" justifyContent="center" id="work-space">
        Espaço
      </Text>
      <Text h="1024" display="flex" alignItems="center" justifyContent="center" id="equipments">
        Equipamentos
      </Text>
      <Text h="1024" display="flex" alignItems="center" justifyContent="center" id="links">
        Links úteis
      </Text>
      <Text h="1024" display="flex" alignItems="center" justifyContent="center" id="contact">
        Contato
      </Text>
    </Box>
  );
}
