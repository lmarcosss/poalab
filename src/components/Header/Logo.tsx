import { Flex, Heading } from '@chakra-ui/react';

export function Logo() {
  return (
    <Flex as="a" href="#" align="center" justify="center">
      <Heading fontSize={['28', '32', '36']} fontWeight="bold" color="white">
        poa
      </Heading>
      <Heading fontSize={['28', '32', '36']} color="green.500">
        LAB
      </Heading>
    </Flex>
  );
}
