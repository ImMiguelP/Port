import {
  Center,
  Heading,
  Stack,
  Link as ChakraLink,
  Divider,
} from "@chakra-ui/react";
import Technologies from "@/components/Technologies/Technologies";
import Contact from "@/components/Contacts/Contact";
import Projects from "@/components/ProjectInfo/Projects";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <Center h={"100vh"}>
      <Stack
        w={isMobile ? "90%" : "100%"}
        maxW="1000px"
        h="100%"
        pt="200px"
        spacing={3}
      >
        <Heading as="h1" size="xl">
          Miguel
        </Heading>
        <Heading as="h5" size="sm">
          28 year old with 4+ years of front web development. Currently building{" "}
          <ChakraLink
            href="https://musy.one"
            textDecoration="underline"
            color="blue.300"
          >
            musy
          </ChakraLink>
        </Heading>
        <Heading py="50px">Tech I Use</Heading>
        <Technologies />
        <Divider pt="50px" />
        <Center>
          <Heading py="100px">Web Projects</Heading>
        </Center>
        <Projects />
        <Divider pt="50px" />
        <Center>
          <Heading py="50px" id="contact-me">
            Contact Me
          </Heading>
        </Center>
        <Contact />
        <Center pb="200px"></Center>
      </Stack>
    </Center>
  );
}
