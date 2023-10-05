import { HStack, Text } from '@chakra-ui/react'
import React from 'react'

const Nav = () => {
  return (
    <HStack mx={5} border={"1px solid red"} justifyContent={"space-between"}>
        <Text>Miguel</Text>
        <Text>test</Text>
        <Text>test</Text>
    </HStack>
  )
}

export default Nav