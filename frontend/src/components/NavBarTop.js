import React from 'react';
import { scrollToElementByID } from '../helpers/scrollToView';
import { Navbar, Container, Nav } from 'react-bootstrap';
const NavbarTop = () => {
  return (
    <Navbar className='bg-c' expand="lg">
      <Container>
        <Navbar.Brand>
          <h3 className='navbartop__font m-0'>
            Perfil
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{scrollToElementByID('aboutMe')}}>
              <p className='navbartop__font'>
                Sobre mí
              </p>
            </Nav.Link>
            <Nav.Link onClick={()=>{scrollToElementByID('skills')}}>
              <p className='navbartop__font'>
                Habilidades
              </p>
            </Nav.Link>
            <Nav.Link onClick={()=>{scrollToElementByID('exp')}}>
              <p className='navbartop__font'>
                Experiencia
              </p>
            </Nav.Link>
            <Nav.Link onClick={()=>{scrollToElementByID('contact')}}>
              <p className='navbartop__font'>
                Contacto
              </p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


export default NavbarTop;
