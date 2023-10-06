import useZoom from '@/hooks/useZoom';
import { Button, HStack, Text, useColorMode } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa6';

const Nav = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const hoverEffect = useZoom();
  return (
    <HStack mx={5}  justifyContent={"space-between"}>
    {/* THis is where a logo would go if i had one so for now it will just be my name */}
        <Link href={"/"} >
        <Text {...hoverEffect}>Miguel</Text>
        </Link>
        <HStack>
        <Text>test</Text>
        <Text>test</Text>
        <Button variant="ghost" onClick={toggleColorMode} {...hoverEffect}>
        {colorMode === "light" ? <FaMoon /> : <FaSun />}
    </Button>
        </HStack>
    </HStack>
  )
}

export default Nav