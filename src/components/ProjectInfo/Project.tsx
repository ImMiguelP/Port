import React from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  Grid,
  HStack,
  Heading,
  Image,
  Tag,
  Tooltip,
  useBreakpointValue,
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
  tech: string | string[];
}

const Project: React.FC<ProjectProps> = ({
  name,
  desc,
  link,
  git,
  images,
  tech,
}) => {
  const hoverEffect = useZoom();
  const numColumns = useBreakpointValue({ base: 3, md: 4 });

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
      <Grid
        templateColumns={`repeat(${numColumns}, 1fr)`}
        gap={4}
        w="100%"
        p={5}
      >
        {Array.isArray(tech) ? (
          tech.map((item, index) => (
            <Tag key={index} h="40px" variant="outline" colorScheme="blue">
              {item}
            </Tag>
          ))
        ) : (
          <Tag size="sm" colorScheme="blue">
            {tech}
          </Tag>
        )}
      </Grid>
      <Center>
        <Box borderWidth="1px" w="90%" rounded="lg">
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
                  GitHub Repo
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
