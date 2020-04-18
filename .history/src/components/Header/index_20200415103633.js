import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import Container from './styles';

import logo from '../../assets/imgs/logo.svg';

export default function Header() {
  return (
    <Container id="header">
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <img src={logo} alt="logomarca da empresa ProEnem" />
        </Navbar.Brand>
        <Navbar.Toggle
          className="border-0 p-0"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/#planos-proenem">Nossos cursos</Nav.Link>
            <Nav.Link href="https://www.proenem.com.br/curso-de-redacao/">
              Intensivo Redação
            </Nav.Link>
            <NavDropdown title="Tudo sobre o Enem">
              <NavDropdown.Item href="https://www.proenem.com.br/enem">
                Guia do Enem
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.proenem.com.br/enem/lingua-portuguesa/">
                Lingua portuguesa
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.proenem.com.br/enem/literatura/">
                Literatura
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.proenem.com.br/enem/redacao/">
                Redação
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.proenem.com.br/enem/matematica/">
                Matemática
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.proenem.com.br/enem/fisica/">
                Física
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.proenem.com.br/enem/quimica/">
                Quimica
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.proenem.com.br/enem/biologia/">
                Biologia
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.proenem.com.br/enem/historia/">
                História
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.proenem.com.br/enem/geografia/">
                Geografia
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.proenem.com.br/enem/filosofia/">
                Filosofia
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.proenem.com.br/enem/sociologia/">
                Sociologia
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.proenem.com.br/enem/ingles/">
                Interpretação
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.proenem.com.br/enem/interpretacao/">
                Inglês
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.proenem.com.br/enem/espanhol/">
                Espanhol
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="https://proenem.com.br/aluno/cadastre-se">
              Cadastro
            </Nav.Link>
            <Nav.Link href="https://proenem.com.br/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
