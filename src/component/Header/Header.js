import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>    
  <Navbar bg="dark" variant="dark">
    <h1 className = 'text-white ms-4'>First Learn</h1>
    <Container className = 'ps-5'>
    <Nav className="ms-auto">
      <Nav.Link href="home">Home</Nav.Link>
      <Nav.Link href="services">Services</Nav.Link>
      <Nav.Link href="review">Review</Nav.Link>
      <Nav.Link href="about">About</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
            {/* <NavLink to = './home'>Home</NavLink>
            <NavLink to = './review'>Review</NavLink>
            <NavLink to = './services'>Services</NavLink>
            <NavLink to = './about'>About</NavLink> */}
        </div>
    );
};

export default Header;