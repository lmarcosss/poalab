import { Flex, Heading } from '@chakra-ui/react';

interface Props {
  containerProps?: any;
  darkTheme?: boolean;
}
export function Logo({ containerProps, darkTheme = false }: Props) {
  return (
    <Flex as="a" {...containerProps} align="center" justify="center">
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
