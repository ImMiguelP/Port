import { useZoom } from '@/hooks/useStyling';
import { Button, Center, Divider, HStack, useColorMode, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa6';
import { RiHomeHeartFill } from 'react-icons/ri';

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.100', 'dark')
  const hoverEffect = useZoom();

  const handleMoonClick = () => {
    if (colorMode === 'dark') {
      toggleColorMode();
    }
  };

  const handleSunClick = () => {
    if (colorMode === 'light') {
      toggleColorMode();
    }
  };

  return (
    <HStack w="100%" px={10} pos="fixed" height='100px'>
      <Center w="100%" >
        <Link href="/">
          <Button variant="ghost" {...hoverEffect}>
            <RiHomeHeartFill />
          </Button>
        </Link>
        <Divider orientation='vertical' h={"20px"} />
        <HStack ml={1} bgColor={`${bgColor}`} borderRadius={"lg"}>
        <Center>
        <Button variant="ghost" {...hoverEffect} onClick={handleMoonClick}  opacity={colorMode === 'light' ? 1 : 0.5}>
            <FaSun />
          </Button>
          <Button variant="ghost" {...hoverEffect} onClick={handleSunClick} opacity={colorMode === 'dark' ? 1 : 0.5}>
            <FaMoon />
          </Button>
        </Center>
        </HStack>
      </Center>
    </HStack>
  );
};

export default Nav;
