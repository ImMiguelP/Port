import React from "react";
import { Box, Grid, useBreakpointValue } from "@chakra-ui/react";
import ContactInfo from "./ContactInfo";
import { useHoverOpacity } from "@/hooks/useStyling";
import { contactinfo } from "./ContactObject";

const Contact = () => {
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
      {contactinfo.map((contact, index) => (
        <Box
          key={index}
          opacity={hoveredIndex === null ? 1 : hoveredIndex === index ? 1 : 0.5}
          _hover={{ opacity: hoveredIndex === index ? 1 : 0.5 }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <ContactInfo key={index} {...contact} />
        </Box>
      ))}
    </Grid>
  );
};

export default Contact;
