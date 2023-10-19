import { Box, Grid, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import Technology from "./Technology";
import { useHoverOpacity } from "@/hooks/useStyling";
import { technologies } from "./TechsObject";

const Technologies = () => {
  const { hoveredIndex, handleMouseEnter, handleMouseLeave } =
    useHoverOpacity();

  const numColumns = useBreakpointValue({ base: 4, md: 10 });

  return (
    <Grid
      templateColumns={`repeat(${numColumns}, 2fr)`}
      gap={5}
      alignItems="center"
    >
      {technologies.map((tech, index) => (
        <Box
          key={index}
          opacity={hoveredIndex === null ? 1 : hoveredIndex === index ? 1 : 0.5}
          _hover={{ opacity: hoveredIndex === index ? 1 : 0.5 }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <Technology key={index} {...tech} />
        </Box>
      ))}
    </Grid>
  );
};

export default Technologies;
