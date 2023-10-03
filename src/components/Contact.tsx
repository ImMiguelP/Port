import { Button, Image, Tooltip } from '@chakra-ui/react'
import React from 'react'

const Contact = () => {
  const contactinfo = [
    { name: 'Github', image: '/images/github.svg'},
    { name: 'LinkedIn', image:'/images/linkedin.svg'},
    { name: 'Mail', image:'/images/mail.svg'}
]

  return (
    <>
    {contactinfo.map((contact, index) => (
      <Tooltip key={index} label={`${contact.name}`}>
        <Button variant='outline' w={"100%"} rounded={"full"}>
        <Image boxSize={"32px"} src={contact.image} alt={`${contact.name} Logo`} />
            </Button>
        
      </Tooltip>
    ))}
  </>
  
  )
}

export default Contact