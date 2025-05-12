import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaRegCopyright } from 'react-icons/fa';
import { RiTeamFill } from 'react-icons/ri';
import { IoMdRocket } from 'react-icons/io';
import './Footer.css';

const Footer = () => {
  const teamMembers = [
    { name: 'Thiago Allan', github: 'https://github.com/ThiagoAlla' },
    { name: 'Ademilson Ribeiro', github: 'https://github.com/Rinsano' },
    { name: 'Felipe Rebelo', github: 'https://github.com/felipe291' },
    { name: 'Agemilson Abreu', github: 'https://github.com/agemilsonn' },
    { name: 'João Victor', github: 'https://github.com/Joao-Victor-Oliveira-Silva' },
  ];

  return (
    <footer className="footer-interdimensional">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} className="footer-content">
            <div className="team-section">
              <h3 className="footer-title">
                <RiTeamFill className="icon-spin" /> Equipe Dimensional
              </h3>
              <div className="team-grid">
                {teamMembers.map((member, index) => (
                  <a
                    key={index}
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-member-link"
                  >
                    <FaGithub className="github-icon" />
                    <span>{member.name}</span>
                    <div className="hover-effect"></div>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="footer-bottom">
              <p className="copyright">
                <FaRegCopyright /> {new Date().getFullYear()} Rick and Morty Blog Interdimensional
              </p>
              <p className="made-with">
                Criado com <IoMdRocket className="rocket-icon" /> e Portal Fluid
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;