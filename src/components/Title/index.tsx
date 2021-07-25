import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

export function Title({ text, id }) {
  return (
    <Flex
      w="100%"
      h="100"
      backgroundColor="gray.700"
      backgroundSize="cover"
      align="center"
      justify="center"
      id={id}
      name={id}
    >
      <Text fontSize="22" fontWeight="700" color="white">
        {text}
      </Text>
    </Flex>
  )
}