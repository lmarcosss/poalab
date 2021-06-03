import { Flex, Text, Image, HStack, Link, Icon } from '@chakra-ui/react';
import { FiYoutube, FiFacebook } from 'react-icons/fi';

const SOCIAL_MEDIA = [
  {
    icon: FiYoutube,
    href: 'https://www.youtube.com/channel/UCWZzR8M4KKD6l7hpOZb9viA',
  },
  {
    icon: FiFacebook,
    href: 'https://www.facebook.com/poalab',
  },
];

export function Footer() {
  return (
    <HStack
      as="footer"
      id="contact"
      display="flex"
      w="100%"
      maxHeight="384px"
      background="gray.700"
      justifyContent="center"
      alignItems="center"
      color="white"
      spacing="24px"
      flexWrap="wrap"
      py="16"
    >
      <Link target="_blank" href="https://www.poa.ifrs.edu.br/">
        <Image w="20" src="/images/ifrs.svg" />
      </Link>
      <HStack justifyContent="center" direction="column" fontSize={['12', '16']}>
        <Flex direction="column">
          <Text>R. Cel. Vicente, 281 Sala 1016</Text>
          <Text>Torre Sul Centro Histórico</Text>
          <Text>Porto Alegre - RS CEP: 90030-041</Text>

          <Flex direction="column" pt="4">
            <Text>Coordenação: André Peres </Text>
            <Text>andre.peres@poa.ifrs.edu.br</Text>
          </Flex>
        </Flex>
      </HStack>

      <HStack pt="4" spacing="16px" width="100%" justifyContent="center">
        {SOCIAL_MEDIA.map((item) => (
          <Link key={item.href} href={item.href} target="_blank">
            <Icon fontSize="32" as={item.icon} color="white" />
          </Link>
        ))}
      </HStack>
    </HStack>
  );
}
