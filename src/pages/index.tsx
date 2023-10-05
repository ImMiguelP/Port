import {  Center, Heading, Stack, Link as ChakraLink   } from '@chakra-ui/react'
import Technologies from '@/components/Technologies/Technologies'
import Contact from '@/components/Contacts/Contact'
import Projects from '@/components/ProjectInfo/Projects'


export default function Home() {

  
  return (
    <Center h={"100vh"} >
      <Stack w={"100%"} maxW={"1000px"} h={"100%"} pt={"200px"}  spacing={3}>
      <Heading as={"h1"} size={"xl"}>
        Miguel
      </Heading>
      <Heading as={"h5"} size={"sm"}>
        28 year old with 4+ years of front web development. Currently building <ChakraLink href="https://musy.one" textDecoration="underline" color="blue">
    musy
  </ChakraLink>
      </Heading>
      <Heading pt={"12px"}>
        Technologies
      </Heading>
        <Stack direction={"row"}>
          <Technologies />
          </Stack>
          <Heading pt={"12px"}>
        Projects
      </Heading>
      <Stack>
        <Projects />
      </Stack>
      <Heading pt={"12px"}>
        Contact
      </Heading>
      <Stack direction={"row"}>
          <Contact />
          </Stack>
        </Stack>
    </Center>
  )
}
