import React from "react";
import Project from "./Project";
import { Box, Grid, useBreakpointValue } from "@chakra-ui/react";
import { useHoverOpacity } from "@/hooks/useStyling";

const Projects = () => {
  const { hoveredIndex, handleMouseEnter, handleMouseLeave } =
    useHoverOpacity();
  const projects = [
    {
      name: "InReach",
      desc: "Employee",
      link: "https://www.inreach.gg/",
      images: "/images/projects/inreach.png",
      tech: [
        "Web Design",
        "Front End Development",
        "UI/UX Design",
        "TypeScript",
        "Tailwind",
      ],
    },
    {
      name: "Ethereum",
      desc: "Contributor",
      link: "https://ethereum.org/en/",
      git: "https://github.com/ImMiguelP/ethereum-org-website",
      images: "/images/projects/eth1.png",
      tech: [
        "Web Design",
        "Front End Development",
        "UI/UX Design",
        "TypeScript",
        "Chakra-UI",
      ],
    },
    {
      name: "Musy",
      desc: "Contributor",
      link: "https://musy.one/",
      git: "https://github.com/laurentlucian/musy",
      images: "/images/projects/musy2.png",
      tech: [
        "Web Design",
        "Front End Development",
        "UI/UX Design",
        "Remix",
        "TypeScript",
        "Chakra-UI",
        "Prisma",
      ],
    },
    {
      name: "Instagram Clone",
      desc: "Creator",
      git: "https://github.com/ImMiguelP/instagram-clone",
      images: "/images/projects/ig1.png",
      tech: [
        "Web Design",
        "Front End Development",
        "UI/UX Design",
        "React",
        "JavaScript",
        "Chakra-UI",
        "Supabase",
      ],
    },
    {
      name: "Portfolio",
      desc: "Creator",
      git: "https://github.com/ImMiguelP/Port",
      tech: [
        "Web Design",
        "Front End Development",
        "UI/UX Design",
        "Next.JS",
        "TypeScript",
        "Chakra-UI",
      ],
    },
  ];

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
