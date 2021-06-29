import { Box, Image, Flex } from '@chakra-ui/react';

export function Equipment({ name, image, description }) {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Flex h="370">
        <Image
          src={image}
          alt={name}
          objectFit="contain"
        />
      </Flex>
      <Flex p="6" direction="column">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
        >
          {name}
        </Box>
        <Box>
          {description}
        </Box>
      </Flex>
    </Box>
  )
}
