import Link from 'next/link';
import { Flex, Text, Link as ChakraLink } from '@chakra-ui/react';

interface Props {
  title: string;
  subtitle: string;
  description: string;
  slug?: string;
}

export function Banner({ title, subtitle, description, slug }: Props) {
  return (
    <Flex
      w="100%"
      h={['240', '300']}
      backgroundColor="gray.700"
      backgroundSize="cover"
      align="center"
    >
      <Flex direction="column" mx="auto" align="center">
        <Text fontSize={['22', '24', '36']} fontWeight="700" color="white">
          {title}
        </Text>
        <Text fontWeight="500" fontSize={['16', '22', '26']} color="white">
          {subtitle}
        </Text>
        <Text align="center" px="12" fontSize={['12', '14', '16']} fontWeight="400" color="white">
          {description}
        </Text>
        {slug && (
          <Link href={`/posts/${slug}`} passHref>
            <ChakraLink px="12" color="green.500" fontSize={['14', '16']} fontWeight="700">
              Saiba mais
            </ChakraLink>
          </Link>
        )}
      </Flex>
    </Flex>
  );
}
