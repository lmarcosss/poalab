import { Flex, Heading } from '@chakra-ui/react';

interface Props {
  darkTheme?: boolean;
  href?: string;
}
export function Logo({ href, darkTheme = false }: Props) {
  const containerProps: unknown = href ? { as: 'a', href } : {};

  return (
    <Flex {...containerProps} align="center" justify="center">
      <Heading
        fontSize={['28', '32', '36']}
        fontWeight="bold"
        color={darkTheme ? 'black' : 'white'}
      >
        poa
      </Heading>
      <Heading fontSize={['28', '32', '36']} color="green.500">
        LAB
      </Heading>
    </Flex>
  );
}
