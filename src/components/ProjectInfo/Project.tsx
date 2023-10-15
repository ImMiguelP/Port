import React from "react";
import {
  Badge,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  Heading,
  IconButton,
  Image,
  Tag,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { LinkIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useZoom } from "@/hooks/useStyling";

interface ProjectProps {
  name: string;
  desc: string;
  link?: string;
  git?: string;
  images?: string;
}

const Project: React.FC<ProjectProps> = ({ name, desc, link, git, images }) => {
  const hoverEffect = useZoom();

  return (
    <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden" pb={5}>
      <Image src={images} {...hoverEffect} />
      <Box p={6}>
        <HStack alignItems="baseline">
          <Heading as="h4" size="md">
            {name}
          </Heading>
          <Tag size="sm" colorScheme="blue">
            {desc}
          </Tag>
        </HStack>
      </Box>
      <Center>
        <Box borderWidth="1px"  w="90%" rounded="lg">
          <HStack
            justifyContent="space-between"
            alignContent="self-start"
            w="100%"
          >
            {link && (
              <Link href={link}>
                <Button
                  rightIcon={<LinkIcon />}
                  aria-label="Go to Project"
                  colorScheme="blue"
                  variant="ghost"
                  size="sm"
                  w={"100%"}
                >
                  View Project
                </Button>
              </Link>
            )}
            <Divider orientation="vertical" h={"25px"} />
            {git && (
              <Link href={git}>
                <Button
                  rightIcon={<AiFillGithub />}
                  aria-label="Go to GitHub"
                  colorScheme="blue"
                  variant="ghost"
                  size="sm"
                  w={"100%"}
                >
                  Git Code
                </Button>
              </Link>
            )}
          </HStack>
        </Box>
      </Center>
    </Box>
  );
};

export default Project;
