import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link  } from 'react-router-dom';
import useAuth from '../Context/useAuth';

const Header = () => {
  const {user, handleLogout} = useAuth();
  
  
    return (
        <>
        
        <Navbar bg="dark" variant="dark" sticky="top" >
          <Container>
          <Navbar.Brand as={Link} to="/">TourisMado</Navbar.Brand>
         
          <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Navbar.Text className='text-primary font-bold'>Enjoy Life To The Fullest</Navbar.Text>
    <Nav.Link as={Link} className='text-warning' to="/home">Home</Nav.Link>
    {/* <Nav.Link as={Link} to="/packages">Packages</Nav.Link> */}
    
    {/* <Nav.Link as={Link} to="/login">Login</Nav.Link> */}
    <Nav.Link as={Link} className='text-warning' to="/contact">Contact Us</Nav.Link>
            
      <Navbar.Text>
      
   
     
       {
          user.displayName?
         <div className='d-flex'>

            <Nav.Link as={Link} className='text-warning' to="/myOrders">My Orders  </Nav.Link>
            <Nav.Link as={Link} className='text-warning' to="/manageAllOrders">Manage All Orders  </Nav.Link>
            <Nav.Link as={Link} className='text-warning' to="/addPackages">Add Packages </Nav.Link>
            
            <Nav.Link as={Link} className='text-info' to="/user">{user.displayName}  </Nav.Link>
          
          <button className='btn btn-danger rounded' onClick={handleLogout}> LOGOUT</button>

          

         </div>
          :
          <div className='d-flex'>
            <Nav.Link as={Link}  to="/login" className='text-warning'>Login</Nav.Link>
            <Nav.Link as={Link} className='text-warning' to="/register">Register</Nav.Link>

          </div>
          
          
          
        }
     
     
      

      </Navbar.Text>
    </Navbar.Collapse>
          
          </Container>
        </Navbar>
        
      </>
    );
};

export default Header;