import { Button, Grid, Tooltip, useBreakpointValue } from '@chakra-ui/react'
import { TbBrandNextjs } from "react-icons/tb";
import { SiChakraui, SiSupabase, SiRemix, SiFirebase, SiJavascript, SiTypescript, SiTailwindcss, SiReact} from "react-icons/si";
import React from 'react'
import useZoom from '@/hooks/useZoom';

const Technologies = () => {
  const technologies = [
    { name: 'Javascript', icon: <SiJavascript size={"32px"} /> },
    { name: 'Typescript', icon: <SiTypescript size={"32px"}  /> },
    { name: 'React', icon: <SiReact size={"32px"}  /> },
    { name: 'Next.js', icon: <TbBrandNextjs size={"40px"}  /> },
    { name: 'Chakra', icon: <SiChakraui size={"32px"}  /> },
    { name: 'Tailwind', icon: <SiTailwindcss size={"32px"} /> },
    { name: 'Supabase', icon: <SiSupabase size={"32px"}  /> },
    { name: 'Firebase', icon: <SiFirebase size={"32px"}  /> },
    { name: 'Remix', icon: <SiRemix size={"32px"}  />},
  ];


  const numColumns = useBreakpointValue({ base: 6, md: 10 });
  const hoverEffect = useZoom();

  return (
    <Grid 
    templateColumns={`repeat(${numColumns}, 1fr)`}
      gap={5}
      alignItems="center">
    {technologies.map((tech, index) => (
      <Tooltip key={index} label={`${tech.name}`}>
        <Button variant={"ghost"} {...hoverEffect}>
        {tech.icon}
        </Button>
          
      </Tooltip>
    ))}
  </Grid>
);
};

export default Technologies;
