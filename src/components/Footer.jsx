
// components/Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  const teamMembers = [
    { name: 'Thiago Allan', github: 'https://github.com/ThiagoAlla' },
    { name: 'Ademilson Ribeiro', github: 'https://github.com/' },
    { name: 'Felipe Rebelo', github: 'https://github.com/' },
    { name: 'Agemilson Abreu', github: 'https://github.com/' },
    { name: 'João Victor', github: 'https://github.com/' },
  ];

  return (
    <footer className="bg-dark text-white text-center py-3">
      <Container>
        <p>Equipe:</p>
        {teamMembers.map((member, index) => (
          <a
            key={index}
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <FaGithub alt={`GitHub ${member.name}`} size={20} /> {member.name}
          </a>
        ))}
        <p className="mt-2">&copy; 2025 Rick and Morty Blog</p>
      </Container>
    </footer>
  );
};

export default Footer;