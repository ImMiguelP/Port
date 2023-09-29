import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Button, Heading, Stack } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Stack>
      <Heading>
        Miguel
      </Heading>
      <Heading>
        28 year old with 4+ years of front web development.
      </Heading>

      <Heading>
        Technologies
        <Button boxSize={"120px"}>JS</Button>
        <Button boxSize={"120px"}>TS</Button>
        <Button boxSize={"120px"}>React</Button>
        <Button boxSize={"120px"}>Next</Button>
        <Button boxSize={"120px"}>Chakra</Button>
        <Button boxSize={"120px"}>Tailwind</Button>
        <Button boxSize={"120px"}>Supabase</Button>
        <Button boxSize={"120px"}>Remix</Button>
        <Button boxSize={"120px"}>Firebase</Button>
        <Button boxSize={"120px"}>JS</Button>
      </Heading>

      <Heading>
        Contact
      </Heading>

      <Button boxSize={"120px"}>Github</Button>
        <Button boxSize={"120px"}>Mail</Button>
        <Button boxSize={"120px"}>Linkedin</Button>
    </Stack>
  )
}
