import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link  } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark" sticky="top" >
          <Container>
          <Navbar.Brand as={Link} to="/">TourisMado</Navbar.Brand>
          <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={Link} to="/home">Home</Nav.Link>
    {/* <Nav.Link as={Link} to="/packages">Packages</Nav.Link> */}
    <Nav.Link as={Link} to="/register">Register</Nav.Link>
    <Nav.Link as={Link} to="/login">Login</Nav.Link>
    <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            
      <Navbar.Text>
      
      <Nav.Link as={Link} to="/user">Welcome: </Nav.Link>
      

      </Navbar.Text>
    </Navbar.Collapse>
          
          </Container>
        </Navbar>
        
      </>
    );
};

export default Header;