import { Flex, Image } from '@chakra-ui/react';

export function Workspace({ src }) {
  return (
    <Flex
      w="100%"
      h={['264', '324']}
      align="center" justifyContent="center"
    >
      <Image borderRadius="lg" src={src} h={['200', '260']} />
    </Flex>
  );
}
