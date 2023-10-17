import { useZoom } from "@/hooks/useStyling";
import {
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { RiHomeHeartFill } from "react-icons/ri";
import { GiClown } from "react-icons/gi";
import { SiMinutemailer } from "react-icons/si";
import { useRouter } from "next/router";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("light.200", "dark");
  const hoverEffect = useZoom();
  const router = useRouter();
  const buttons = [
    { path: "/", icon: <RiHomeHeartFill /> },
    { path: "/troll", icon: <GiClown /> },
    { path: "/#contact-me", icon: <SiMinutemailer /> },
  ];

  const handleMoonClick = () => {
    if (colorMode === "dark") {
      toggleColorMode();
    }
  };

  const handleSunClick = () => {
    if (colorMode === "light") {
      toggleColorMode();
    }
  };

  return (
    <Flex
      as="header"
      pos="fixed"
      top={0}
      zIndex={1}
      justify="center"
      w="100%"
      backdropFilter="blur(27px)"
      height="80px"
    >
      <Center w="100%">
        {buttons.map(({ path, icon }) => (
          <Link key={path} href={path}>
            <Button
              variant="ghost"
              {...hoverEffect}
              color={router.asPath === path ? "blue.300" : "gray.300"}
            >
              {icon}
            </Button>
          </Link>
        ))}
        <Divider orientation="vertical" h={"20px"} />
        <HStack ml={1} bgColor={`${bgColor}`} borderRadius={"lg"}>
          <Center>
            <Button
              variant="ghost"
              color={colorMode === "light" ? "orange.300" : ""}
              onClick={handleMoonClick}
              opacity={colorMode === "light" ? 1 : 0.5}
              {...hoverEffect}
            >
              <FaSun />
            </Button>
            <Button
              variant="ghost"
              color={colorMode === "dark" ? "teal.200" : ""}
              onClick={handleSunClick}
              opacity={colorMode === "dark" ? 1 : 0.5}
              {...hoverEffect}
            >
              <FaMoon />
            </Button>
          </Center>
        </HStack>
      </Center>
    </Flex>
  );
};

export default Nav;
