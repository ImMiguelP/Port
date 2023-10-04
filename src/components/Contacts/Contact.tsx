import React from 'react';
import { Grid, useBreakpointValue } from '@chakra-ui/react';
import { FaGithubAlt, FaLinkedin } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import ContactInfo from './ContactInfo';

const Contact = () => {
  const contactinfo = [
    { name: 'Github', icon: <FaGithubAlt size={"32px"} />, link: 'https://github.com/ImMiguelP' },
    { name: 'LinkedIn', icon:<FaLinkedin size={"32px"} />, link: 'https://www.linkedin.com/in/miguelpedreguera/'},
    { name: 'Mail', icon: <MdMail size={"32px"}/>, email: "miguelpedreguera84@gmail.com"},
  ];

  const numColumns = useBreakpointValue({ base: 1, md: 2 });

  return (
    <Grid
      templateColumns={`repeat(${numColumns}, 1fr)`}
      gap={4}
      alignItems="center" w="100%"
    >
      {contactinfo.map((contact, index) => (
        <ContactInfo key={index} {...contact} />
      ))}
    </Grid>
  );
}

export default Contact;
