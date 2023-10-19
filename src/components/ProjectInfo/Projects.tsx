import React from "react";
import Project from "./Project";
import { Box, Grid, useBreakpointValue } from "@chakra-ui/react";
import { useHoverOpacity } from "@/hooks/useStyling";
import { projects } from "./ProjectObject";

const Projects = () => {
  const { hoveredIndex, handleMouseEnter, handleMouseLeave } =
    useHoverOpacity();
  const numColumns = useBreakpointValue({ base: 1, md: 2 });

  return (
    <Grid
      templateColumns={`repeat(${numColumns}, 1fr)`}
      gap={4}
      alignItems="center"
      w="100%"
    >
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
    </Grid>
  );
};

export default Projects;
