import { calc, Flex, FlexProps, Text } from '@chakra-ui/react';

interface Logo {
  lightTheme?: boolean;
  containerProps?: FlexProps;
}

export function Logo({ lightTheme = false, containerProps }: Logo) {
  return (
    <Flex as="a" href="#" justify="center" {...containerProps}>
      <Text
        fontSize={['28', '32', '36']}
        fontWeight="bold"
        display="flex"
        flexDirection="row"
        alignItems="center"
        color={lightTheme ? 'white' : 'gray.800'}
      >
        poa
        <Text color="green.500">LAB</Text>
      </Text>
    </Flex>
  );
}
