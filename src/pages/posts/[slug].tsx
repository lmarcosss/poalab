import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Flex, Heading, Box, Text, Image, IconButton, Icon } from '@chakra-ui/react';

import { Markdown } from '../../components/Markdown';
import { Footer } from '../../components/Footer';
import { Logo } from '../../components/Header/Logo';
import { RiArrowUpSLine } from 'react-icons/ri';
import { useWindowEvent } from '../../hooks/useWindowEvent';
import { useState } from 'react';

const PAGE_TOP = 0;

interface Props {
  article: {
    title: string;
    text: string;
    image: string;
  };
  updatedAt: string;
}

export default function Post({ article, updatedAt }: Props) {
  const [pagePosition, setPagePosition] = useState(0);

  function handleScroll() {
    setPagePosition(window.pageYOffset);
  }

  function scrollToTop() {
    window.scrollTo(PAGE_TOP, PAGE_TOP);
  }

  useWindowEvent('scroll', handleScroll);

  return (
    <>
      <Head>
        <title>poaLAB | post</title>
      </Head>
      <Flex
        w="100%"
        h="100%"
        direction="column"
        align="center"
        justify="center"
        position="relative"
      >
        <Box
          as="header"
          display="flex"
          py="4"
          alignItems="center"
          justifyContent="center"
          background="gray.700"
          width="100%"
          mb="4"
        >
          <Logo href="/" />
        </Box>
        {article && (
          <Box m="auto" p="0 35px">
            <Box maxWidth={720} as="article" pb="8" background="white">
              <Heading py="4">{article?.title}</Heading>
              <Text fontWeight="500" fontSize={['12', '14']} color="gray.500">
                {new Date(updatedAt).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
              </Text>
              {article?.image && (
                <Image py="4" h={['350px', '450px', '650px']} w="100%" src={article?.image} />
              )}
              <Markdown>{article?.text}</Markdown>
            </Box>
          </Box>
        )}
        {pagePosition > PAGE_TOP && (
          <IconButton
            aria-label="Ir para o topo"
            icon={<Icon as={RiArrowUpSLine} />}
            fontSize="32px"
            variant="unstyled"
            color="white"
            bg="gray.700"
            display="flex"
            alignItems="center"
            position="fixed"
            right={['20px', '20px', '20px', '60px']}
            bottom="40px"
            onClick={scrollToTop}
          />
        )}
        <Footer />
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://poalab.vercel.app/api/posts');
  const data = await response.json();

  const slugsFiltered = data.result
    .map((item) => item?.slug)
    .filter((item) => typeof item === 'string');

  const slugs = slugsFiltered.map((slug) => ({
    params: {
      slug,
    },
  }));

  return {
    paths: slugs,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(`https://poalab.vercel.app/api/posts/${params.slug}`);
  const data = await response.json();

  return {
    props: { ...data.post },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
