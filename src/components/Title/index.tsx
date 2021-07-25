import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

export function Title({ text }) {
  return (
    <Flex
      w="100%"
      h="100"
      backgroundColor="gray.700"
      backgroundSize="cover"
      align="center"
      justify="center"
    >
      <Text fontSize="22" fontWeight="700" color="white">
        {text}
      </Text>
    </Flex>
  )
}