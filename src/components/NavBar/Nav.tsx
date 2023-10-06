import { Button, HStack, Text, useColorMode } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa6';

const Nav = () => {
    const { colorMode, toggleColorMode } = useColorMode();
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
        <Button variant="ghost" _hover={{ backgroundColor: "transparent" }} onClick={toggleColorMode}>
        {colorMode === "light" ? <FaMoon /> : <FaSun />}
    </Button>
        </HStack>
    </HStack>
  )
}

export default Nav