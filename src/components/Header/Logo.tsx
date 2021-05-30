import { Flex, Text } from '@chakra-ui/react';

export function Logo() {
  return (
    <Flex as="a" href="#" justify="center">
      <Text
        fontSize={['28', '32', '36']}
        fontWeight="bold"
        display="flex"
        flexDirection="row"
        alignItems="center"
        color="white"
      >
        poa
        <Text color="green.500">LAB</Text>
      </Text>
    </Flex>
  );
}
