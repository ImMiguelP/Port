import { Button, Center, Heading, Icon, Image, Stack } from '@chakra-ui/react'
import Technologies from '@/components/Technologies'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Contact from '@/components/Contact'


export default function Home() {

  
  return (
    <Center h={"100vh"}>
      <Stack>
      <Heading as={"h1"} size={"xl"}>
        Miguel
      </Heading>
      <Heading as={"h5"} size={"sm"}>
        28 year old with 4+ years of front web development.
      </Heading>
      <Heading>
        Technologies
      </Heading>
        <Stack direction={"row"}>
          <Technologies />
          </Stack>
      <Heading>
        Contact
      </Heading>
      <Stack direction={"row"}>
          <Contact />
          </Stack>
        </Stack>
    </Center>
  )
}
