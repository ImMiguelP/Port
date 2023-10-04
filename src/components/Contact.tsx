import useZoom from '@/hooks/useZoom';
import { Button, Grid, Tooltip, useBreakpointValue } from '@chakra-ui/react'
import { MdMail } from "react-icons/md";
import { FaLinkedin, FaGithubAlt } from "react-icons/fa6";
import Link from 'next/link';
import React from 'react'

const Contact = () => {
  const contactinfo = [
    { name: 'Github', icon: <FaGithubAlt size={"32px"} />, link: 'https://github.com/ImMiguelP' },
    { name: 'LinkedIn', icon:<FaLinkedin size={"32px"} />, link: 'https://www.linkedin.com/in/miguelpedreguera/'},
    { name: 'Mail', icon: <MdMail size={"32px"}/>, email: "miguelpedreguera84@gmail.com"},
  ];

  const sendEmail = (emailAddress: string) => {
    const mailtoLink = `mailto:${emailAddress}`;
    window.location.href = mailtoLink;
  };

  const numColumns = useBreakpointValue({ base: 1, md: 2 });
  const hoverEffect = useZoom();

  return (
    <Grid
      templateColumns={`repeat(${numColumns}, 1fr)`}
      gap={4}
      alignItems="center" w={"100%"}
    >
      {contactinfo.map((contact, index) => (
        <Tooltip key={index} label={`${contact.name}`}>
          {contact.link ? (
            <Link href={contact.link}>
              <Button variant='outline' w="100%" rounded="lg" {...hoverEffect}>
                {contact.icon}
              </Button>
            </Link>
          ) : (
            contact.email ? (
              <Button
                variant='outline'
                w="100%"
                rounded="lg"
                onClick={() => sendEmail(contact.email)}
                {...hoverEffect}
              >
                {contact.icon}
              </Button>
            ) : null
          )}
        </Tooltip>
      ))}
    </Grid>
  );
}

export default Contact;
