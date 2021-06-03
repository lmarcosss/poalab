import { Flex, Heading } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';

export default function Post({ slug }) {
  return (
    <Flex w="100%" h="100vh" align="center">
      <Heading flex="1" textAlign="center">
        {slug}
      </Heading>
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;

  return {
    props: { slug },
  };
};
