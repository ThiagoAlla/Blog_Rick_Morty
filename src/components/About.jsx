import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './About.css';

const About = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="portal-card shadow-lg">
            <div className="portal-card-content">
              <Card.Body>
                <Card.Title className="portal-title text-center">
                  Sobre o Blog Interdimensional
                </Card.Title>
                
                <div className="portal-content">
                  <p>
                    Este portal dimensional foi desenvolvido como projeto final para a matéria de 
                    <strong> Laboratório de Produção de Software</strong>, explorando 
                    os vastos multiversos de Rick and Morty.
                  </p>
                  
                  <h3 className="portal-subtitle">Equipe de Desenvolvimento</h3>
                  
                  <ul className="team-list">
                    <li className="team-member">
                      <span className="member-name">Thiago Allan</span>
                      <span className="member-role">Desenvolvedor & Data Engineer</span>
                    </li>
                    <li className="team-member">
                      <span className="member-name">Ademilson Ribeiro</span>
                      <span className="member-role">Desenvolvedor Full Stack</span>
                    </li>
                    <li className="team-member">
                      <span className="member-name">Felipe Rebelo</span>
                      <span className="member-role">Web Designer & UI/UX</span>
                    </li>
                    <li className="team-member">
                      <span className="member-name">João Victor</span>
                      <span className="member-role">Pesquisador de Multiversos</span>
                    </li>
                    <li className="team-member">
                      <span className="member-name">Agemilson Abreu</span>
                      <span className="member-role">Especialista em Portal Gun</span>
                    </li>
                  </ul>

                  <div className="portal-footer text-center">
                    <p>
                      Este projeto utiliza a incrível <a href="https://rickandmortyapi.com/" target="_blank" rel="noopener noreferrer">Rick and Morty API</a> para 
                      trazer informações precisas sobre todos os personagens através das dimensões.
                    </p>
                    <p className="mt-3">
                      <small>© {new Date().getFullYear()} Blog Interdimensional - Todos os universos reservados</small>
                    </p>
                  </div>
                </div>
              </Card.Body>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;