import React from 'react';
import { Box, Button, HStack, IconButton, Tag, Text, Tooltip } from '@chakra-ui/react';
import { AiFillGithub } from "react-icons/ai";
import { LinkIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import useZoom from '@/hooks/useZoom';


interface ProjectProps {
    name: string;
    desc: string;
    link?: string;
    git?: string;
  }

const Project: React.FC<ProjectProps> = ({ name, desc, link, git })=> {
  const hoverEffect = useZoom();

  return (
    <Tooltip label={name} placement='bottom-start'>
      <Button as={Box} variant="outline" w="100%" rounded="lg" {...hoverEffect}>
        <HStack justifyContent="space-between" alignContent="self-start" w="100%">
          <Text>
            {name}
            <Tag ml={3} size="md" colorScheme="blue">
              {desc}
            </Tag>
          </Text>
          <HStack>
            {link && (
              <Link href={link}>
                <IconButton variant="ghost" aria-label="Go to website" size="sm" icon={<LinkIcon />} />
              </Link>
            )}
            {git && (
              <Link href={git}>
                <IconButton variant="ghost" aria-label="Go to GitHub" size="sm" icon={<AiFillGithub />} />
              </Link>
            )}
          </HStack>
        </HStack>
      </Button>
    </Tooltip>
  );
};

export default Project;
