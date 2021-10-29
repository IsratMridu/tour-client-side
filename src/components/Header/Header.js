import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark" sticky="top" >
          <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
      <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>
    </Navbar.Collapse>
          
          </Container>
        </Navbar>
        
      </>
    );
};

export default Header;