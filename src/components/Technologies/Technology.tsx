import { useZoom } from '@/hooks/useStyling';
import { Button, Tooltip } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface TechnologyProps {
    name: string;
    icon: ReactNode;
    link: string;
  }

const Technology: React.FC<TechnologyProps> = ({ name, icon, link }) => {
    const hoverEffect = useZoom();
  return (
    <Tooltip label={name}>
      <Button variant="ghost" as="a" href={link} target="_blank" rel="noopener noreferrer" {...hoverEffect}>
        {icon}
      </Button>
    </Tooltip>
  );
};

export default Technology;
