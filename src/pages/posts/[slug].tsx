import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Flex, Heading, Box, Text, Image } from '@chakra-ui/react';

import { Markdown } from '../../components/Markdown';
import { Footer } from '../../components/Footer';
import { Logo } from '../../components/Header/Logo';

interface Props {
  article: {
    title: string;
    text: string;
    image: string;
  };
  updatedAt: string;
}

export default function Post({ article, updatedAt }: Props) {
  return (
    <>
      <Head>
        <title>poaLAB | post</title>
      </Head>
      <Flex w="100%" h="100%" direction="column" align="center" justify="center">
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
          <Logo containerProps={{ href: '/' }} />
        </Box>
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
              <Image py="4" h={['350px', '450px', '550px']} w="100%" src={article?.image} />
            )}
            <Markdown>{article?.text}</Markdown>
          </Box>
        </Box>
        <Footer />
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(`${process.env.API_ENDPOINT}/api/posts/${params.slug}`);
  const data = await response.json();

  return {
    props: { ...data.post },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
