import { Box, Grid, useBreakpointValue } from "@chakra-ui/react";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiChakraui,
  SiSupabase,
  SiRemix,
  SiFirebase,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiPrisma,
} from "react-icons/si";
import React from "react";
import Technology from "./Technology";
import { useHoverOpacity } from "@/hooks/useStyling";

const Technologies = () => {
  const { hoveredIndex, handleMouseEnter, handleMouseLeave } =
    useHoverOpacity();
  const technologies = [
    {
      name: "Javascript",
      icon: <SiJavascript size={"32px"} />,
      link: "https://www.javascript.com/",
    },
    {
      name: "Typescript",
      icon: <SiTypescript size={"32px"} />,
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "React",
      icon: <SiReact size={"32px"} />,
      link: "https://react.dev/",
    },
    {
      name: "Next.js",
      icon: <TbBrandNextjs size={"40px"} />,
      link: "https://nextjs.org/",
    },
    {
      name: "Chakra",
      icon: <SiChakraui size={"32px"} />,
      link: "https://chakra-ui.com/",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss size={"32px"} />,
      link: "https://tailwindcss.com/",
    },
    {
      name: "Supabase",
      icon: <SiSupabase size={"32px"} />,
      link: "https://supabase.com/",
    },
    {
      name: "Firebase",
      icon: <SiFirebase size={"32px"} />,
      link: "https://firebase.google.com/",
    },
    {
      name: "Remix",
      icon: <SiRemix size={"32px"} />,
      link: "https://remix.run/",
    },
    {
      name: "Primsa",
      icon: <SiPrisma size={"32px"} />,
      link: "https://www.prisma.io/",
    },
  ];

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
