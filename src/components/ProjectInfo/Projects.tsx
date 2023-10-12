import React from 'react'
import Project from './Project';
import { Box } from '@chakra-ui/react';
import { useHoverOpacity } from '@/hooks/useStyling';

const Projects = () => {
  const { hoveredIndex, handleMouseEnter, handleMouseLeave } = useHoverOpacity()
  const projects = [
    { name: 'InReach', desc:'Employee', link:'https://www.inreach.gg/',},
    { name: 'Ethereum', desc: 'Contributor', link: 'https://ethereum.org/en/', git: 'https://github.com/ImMiguelP/ethereum-org-website'},
    { name: 'Musy', desc:'Contributor', link: 'https://musy.one/', git:'https://github.com/laurentlucian/musy'},
    { name: 'Instagram Clone', desc:'Creator', git: 'https://github.com/ImMiguelP/instagram-clone' },
    { name: 'Portfolio', desc:'Creator', git: 'https://github.com/ImMiguelP/Port' }
]

return (
  <>
    {projects.map((project, index) => (
       <Box
       key={index}
        opacity={hoveredIndex === null ? 1 : hoveredIndex === index ? 1 : 0.5} 
        _hover={{ opacity: hoveredIndex === index ? 1 : 0.5 }} 
        onMouseEnter={() => handleMouseEnter(index)} 
        onMouseLeave={() => handleMouseLeave()}
     >
      <Project key={index} {...project} />
      </Box>
    ))}
  </>
);
};

export default Projects