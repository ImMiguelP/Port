import React, { ReactNode } from 'react';
import { Button, Tooltip } from '@chakra-ui/react';
import { useZoom } from '@/hooks/useStyling';



interface ContactInfoProps {
    name: string;
    icon: ReactNode;
    link?: string;
    email?: string;
  }

const ContactInfo: React.FC<ContactInfoProps> = ({ name, icon, link, email }) => {
  const hoverEffect = useZoom();

  const handleButtonClick = () => {
    if (link) {
      window.open(link, '_blank');
    } else if (email) {
      const mailtoLink = `mailto:${email}`;
      window.location.href = mailtoLink;
    }
  };

  return (
    <Tooltip label={name}>
      <Button
        variant="outline"
        w="95%"
        rounded="lg"
        onClick={handleButtonClick}
        {...hoverEffect}
      >
        {icon}
      </Button>
    </Tooltip>
  );
};

export default ContactInfo;
