import { Flex, Text } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex
      w="100%"
      h={['180', '240', '300']}
      mt={['16', '20']}
      backgroundColor="gray.700"
      backgroundSize="cover"
      align="center"
    >
      <Flex direction="column" mx="auto">
        <Text textAlign="center" fontSize={['30', '36']} fontWeight="700" color="white">
          Atenção!
          <Text fontWeight="500" fontSize={['18', '26']}>
            Estamos Mudando de sala!
          </Text>
          <Text fontSize={['12', '16']} fontWeight="400">
            Continuaremos no campus Porto Alegre do IFRS, voltamos em breve.
          </Text>
        </Text>
      </Flex>
    </Flex>
  );
}
