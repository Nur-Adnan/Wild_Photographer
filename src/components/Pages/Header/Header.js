import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import "./Header.css";

const Header = () => {
  const [user]=useAuthState(auth)
  const handleSignOut=() => {
    signOut(auth)
  }
    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
        <Container className='p-1 head-font'>
        <Navbar.Brand as={Link}  to="/">Wild PhotoGrapher</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto link-font">
            <Nav.Link as={Link} className = 'text-light px-3' to="/">Home</Nav.Link>
            <Nav.Link as={Link} className = 'text-light px-3' to="/services">Premium Pictures</Nav.Link>
            <Nav.Link as={Link} className = 'text-light px-3' to="/about">About</Nav.Link>
            <Nav.Link as={Link} className = 'text-light px-3' to="/blogs">Blogs</Nav.Link>
            <Nav.Link as={Link} className = 'text-light px-3' to="/checkOut">Check Out</Nav.Link>
            {
              user ? <button style={{ borderRadius:"10px"}} onClick={handleSignOut}>Sign out</button>:
              <Nav.Link as={Link} className = 'text-light px-3' to="/login">Login</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;