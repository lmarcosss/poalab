import { Box, Image, Flex } from '@chakra-ui/react';

export function Equipment({ name, image, description }) {
  return (
    <Flex direction="column" maxW="sm" justify="space-between" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box boxSizing="sm">
        <Image
          w="100%"
          h="auto"
          src={image}
          alt={name}
          objectFit="contain"
        />
      </Box>
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
    </Flex>
  )
}
