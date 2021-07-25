import { GetStaticProps } from 'next';
import {
  Box,
  Text,
  Flex,
  SimpleGrid,
  Link as ExternalLink,
} from '@chakra-ui/react';

import {
  Swiper,
  Header,
  Footer,
  Banner,
  Equipment,
  Link,
  Workspace,
  Title,
} from '../components';

export default function Home({
  posts,
  equipments,
  links,
  workspace,
}) {
  return (
    <Box>
      <Header />
      <Box mt="18">
        <Swiper Component={Banner} items={posts} />
      </Box>
      <Box>
        <Text
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          textAlign="center"
          padding="10"
          fontSize="18"
          orientation="horizontal"
        >
          <span>
            O <b>poaLAB</b> é um laboratório de fabricação digital e está conectado à rede mundial de fab labs.<br/>
          </span>
            Opera como um programa de extensão do IFRS campus Porto Alegre.<br/>
            Temos como missão popularizar o acesso
            e letramento na fabricação digital,<br/>
            funcionando como uma plataforma de criatividade,
            aprendizagem e invenção.<br/>
            Ser um Fab Lab significa estar conectado
            a uma comunidade mundial de<br/>
            alunos, educadores, técnicos, pesquisadores e inovadores e desenvolver<br/>
            atividades dentro da filosofia do conhecimento aberto.<br/>
            <Text>
              Conheça a {' '}
              <ExternalLink
                isExternal
                color="green.500"
                href="http://www.fabfoundation.org/index.php/the-fab-charter/index.html"
              >
                FAB CHARTER
              </ExternalLink>
            </Text>
            A Carta de Intenções que regra os Fab Labs<br/>
        </Text>
      </Box>
      <Box>
        <Title text="Espaço" />
        <Box paddingTop="8px" paddingBottom="18px">
          <Swiper Component={Workspace} items={workspace} />
        </Box>
      </Box>
      <Box>
        <Title text="Equipamentos" />
        <SimpleGrid columns={{ lg: 4, sm: 2, md: 3}} spacing={10} padding={10}>
          {equipments.map((equipment, index) => (
            <Equipment {...equipment} key={index} />
          ))}
        </SimpleGrid>
      </Box>
      <Box>
        <Title text="Links úteis" />
        <SimpleGrid columns={{ lg: 4, sm: 2, md: 3}} spacing={10} padding={20}>
          {links.map((link, index) => (
            <Flex justify="center">
              <Link {...link} key={index} />
            </Flex>
          ))}
        </SimpleGrid>
      </Box>

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
  return await fetchData('https://poalab.vercel.app/api/links');
}

const getWorkspace = async () => {
  return await fetchData('https://poalab.vercel.app/api/workspace');
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();
  const equipments = await getEquipments();
  const links = await getLinks();
  const workspace = await getWorkspace();

  return {
    props: {
      posts,
      equipments,
      links,
      workspace,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
