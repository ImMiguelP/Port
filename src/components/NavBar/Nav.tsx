import { HStack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <HStack mx={5}  justifyContent={"space-between"}>
    {/* THis is where a logo would go if i had one so for now it will just be my name */}
    {/* Uncomment Link Component when page goes live will redirect to home page */}
        {/* <Link > */}
        <Text>Miguel</Text>
        {/* </Link> */}
        <HStack>
        <Text>test</Text>
        <Text>test</Text>
        </HStack>
    </HStack>
  )
}

export default Nav