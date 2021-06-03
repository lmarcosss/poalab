import { Flex, Heading } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { Footer } from '../../components/Footer';
export default function Post({ slug }) {
  return (
    <Flex w="100%" h="100vh" direction="column">
      <Heading flex="1" textAlign="center">
        {slug}
      </Heading>

      <Footer />
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;

  return {
    props: { slug },
  };
};
