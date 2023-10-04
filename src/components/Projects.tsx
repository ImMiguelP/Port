import useZoom from '@/hooks/useZoom'
import { LinkIcon } from '@chakra-ui/icons'
import { Box, Button, HStack, IconButton, Tag, Text, Tooltip,  } from '@chakra-ui/react'
import { AiFillGithub } from "react-icons/ai";
import Link from 'next/link'
import React from 'react'

const Projects = () => {
  const projects = [
    { name: 'InReach', desc:'Employee', link:'https://www.inreach.gg/',},
    { name: 'Ethereum', desc: 'Contributor', link: 'https://ethereum.org/en/', git: 'https://github.com/ImMiguelP/ethereum-org-website'},
    { name: 'Musy', desc:'Contributor', link: 'https://musy.one/', git:'https://github.com/laurentlucian/musy'},
    { name: 'Instagram Clone', desc:'Creator', git: 'https://github.com/ImMiguelP/instagram-clone' }
]

const hoverEffect = useZoom();
  return (
    <>
    {projects.map((project, index) => (
      <Tooltip key={index} label={`${project.name}`} placement='bottom-start'>
        <Button as={Box} variant={"outline"} w={"100%"} rounded={"lg"} {...hoverEffect}  >
            <HStack justifyContent={"space-between"} alignContent={"self-start"} w={"100%"}>
            <Text>{project.name}
                <Tag ml={3} size={"md"} colorScheme={"blue"}>{project.desc}</Tag>
                </Text>
                <HStack>
                {project.link ? ( <Link href={project.link} >
                <IconButton variant='ghost' aria-label='Go to website' size={"sm"} icon={<LinkIcon />} />
                </Link>) : null}
                {project.git ? ( <Link href={project.git} >
                <IconButton variant='ghost' aria-label='Go to website' size={"sm"} icon={<AiFillGithub />} />
                </Link>) : null}
                </HStack>

               
                
            </HStack>
            </Button>
      </Tooltip>
    ))}
  </>
  
  )
}

export default Projects