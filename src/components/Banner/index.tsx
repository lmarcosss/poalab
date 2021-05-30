import { Flex, Text } from '@chakra-ui/react';

interface Props {
  title: string;
  subtitle: string;
  heading: string;
}

export function Banner({ title, subtitle, heading }: Props) {
  return (
    <Flex
      w="100%"
      h={['240', '300']}
      backgroundColor="gray.700"
      backgroundSize="cover"
      align="center"
    >
      <Flex direction="column" mx="auto">
        <Text textAlign="center" fontSize={['30', '36']} fontWeight="700" color="white">
          {title}
          <Text fontWeight="500" fontSize={['18', '26']}>
            {subtitle}
          </Text>
          <Text px="6" fontSize={['12', '16']} fontWeight="400">
            {heading}
          </Text>
        </Text>
      </Flex>
    </Flex>
  );
}
