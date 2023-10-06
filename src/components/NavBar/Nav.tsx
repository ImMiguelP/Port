import { useZoom } from '@/hooks/useStyling';
import { Button, HStack, Text, useColorMode } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa6';

const Nav = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const hoverEffect = useZoom();
  return (
    <HStack w={"100%"} px={10}  justifyContent={"space-between"} pos={"fixed"}  >
    {/* THis is where a logo would go if i had one so for now it will just be my name */}
        <Link href={"/"} >
        <Text {...hoverEffect}>Miguel</Text>
        </Link>
        <HStack>
        <Button variant="ghost" onClick={toggleColorMode} {...hoverEffect}>
        {colorMode === "light" ? <FaMoon /> : <FaSun />}
    </Button>
        </HStack>
    </HStack>
  )
}

export default Nav