import { Button, Image, SimpleGrid, Tooltip } from '@chakra-ui/react'
import React from 'react'

const Technologies = () => {
  const technologies = [
    { name: 'Javascript', image: '/images/Js.png' },
    { name: 'Typescript', image: '/images/ts.png' },
    { name: 'React', image: '/images/react.png' },
    { name: 'Next.js', image: '/images/next.png' },
    { name: 'Chakra', image: '/images/chakra.png' },
    { name: 'Tailwind', image: '/images/tailwind.png' },
    { name: 'Supabase', image: '/images/supabase.png' },
    { name: 'Remix', image: '/images/remix.png' },
    { name: 'Firebase', image: '/images/firebase.png' },
  ];

  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={4}>
    {technologies.map((tech, index) => (
      <Tooltip key={index} label={`${tech.name}`}>
        <Image boxSize={"32px"} src={tech.image} alt={`${tech.name} Logo`} />
      </Tooltip>
    ))}
  </SimpleGrid>
);
};

export default Technologies;
