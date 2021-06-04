import { Flex, Text, Image, HStack, Link, Icon, Stack } from '@chakra-ui/react';
import { FiYoutube, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const SOCIAL_MEDIAS = [
  {
    icon: FiYoutube,
    href: 'https://www.youtube.com/channel/UCWZzR8M4KKD6l7hpOZb9viA',
  },
  {
    icon: FiFacebook,
    href: 'https://www.facebook.com/poalab',
  },
  {
    icon: FiTwitter,
    href: 'https://twitter.com/ifrs_poa',
  },
  {
    icon: FiInstagram,
    href: 'https://www.instagram.com/ifrspoa',
  },
  {
    icon: FiLinkedin,
    href: 'https://www.linkedin.com/school/ifrs-campus-porto-alegre',
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
      alignItems="flex-start"
      color="white"
      spacing="24px"
      flexWrap="wrap"
      py={['8', '16']}
    >
      <Link pb="8" pt="3px" target="_blank" href="https://www.poa.ifrs.edu.br/">
        <Image w="20" src="/images/ifrs.svg" />
      </Link>
      <Stack fontSize={['12', '16']}>
        <Flex direction="column">
          <Text>R. Cel. Vicente, 281 Sala 1016</Text>
          <Text>Torre Sul - Centro Histórico</Text>
          <Text>Porto Alegre - RS CEP: 90030-041</Text>

          <Flex direction="column" pt="4">
            <Text>Coordenação: André Peres </Text>
            <Text>andre.peres@poa.ifrs.edu.br</Text>
          </Flex>
        </Flex>
        <HStack pt="4" spacing="16px" width="100%">
          {SOCIAL_MEDIAS.map((item) => (
            <Link key={item.href} href={item.href} target="_blank">
              <Icon fontSize={['24', '32']} as={item.icon} color="white" />
            </Link>
          ))}
        </HStack>
      </Stack>
    </HStack>
  );
}
