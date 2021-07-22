import { GetStaticProps } from 'next';
import {
  Box,
  Text,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';

import {
  Swiper,
  Header,
  Footer,
  Banner,
  Equipment,
  Link,
} from '../components';

export default function Home({ posts, equipments, links }) {
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
      <Box>
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
        <SimpleGrid columns={{ lg: 4, sm: 2, md: 3}} spacing={10} padding={10}>
          {equipments.map((equipment, index) => (
            <Equipment {...equipment} key={index} />
          ))}
        </SimpleGrid>
      </Box>
      {/* <Box>
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
        <SimpleGrid columns={{ lg: 4, sm: 2, md: 3}} spacing={10} padding={20}>
          {links.map((link, index) => (
            <Flex justify="center">
              <Link {...link} key={index} />
            </Flex>
          ))}
        </SimpleGrid>
      </Box> */}

      <Footer />
    </Box>
  );
}

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  return data.result
}

const getPosts = async () => {
  return await fetchData('https://poalab.vercel.app/api/posts');
}

const getEquipments = async () => {
  return await fetchData('https://poalab.vercel.app/api/equipments');
}

const getLinks = async () => {
  return await fetchData('https://poalab.vercel.app/api/links')
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();
  const equipments = await getEquipments();
  // const links = await getLinks();

  return {
    props: {
      posts,
      equipments,
      // links,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
