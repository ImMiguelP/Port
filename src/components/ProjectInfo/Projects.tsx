import React from 'react'
import Project from './Project';

const Projects = () => {
  const projects = [
    { name: 'InReach', desc:'Employee', link:'https://www.inreach.gg/',},
    { name: 'Ethereum', desc: 'Contributor', link: 'https://ethereum.org/en/', git: 'https://github.com/ImMiguelP/ethereum-org-website'},
    { name: 'Musy', desc:'Contributor', link: 'https://musy.one/', git:'https://github.com/laurentlucian/musy'},
    { name: 'Instagram Clone', desc:'Creator', git: 'https://github.com/ImMiguelP/instagram-clone' }
]

return (
  <>
    {projects.map((project, index) => (
      <Project key={index} {...project} />
    ))}
  </>
);
};

export default Projects