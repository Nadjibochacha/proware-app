import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';

const Header = () => {
  return (
    <div id='header'>
        <Navbar expand="lg" className="bg-transparent">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src="/src/images/logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle className='basic-btn text-secondary' aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                  <Nav className="me-auto w-100 justify-content-end">
                      <Nav.Link className='link' href="/About">about</Nav.Link>
                      <Nav.Link className='link' href="/Team">our team</Nav.Link>
                      <Nav.Link className='link' href="/Services">services</Nav.Link>
                      <Nav.Link className='link' href="/Portfolio">portfolio</Nav.Link>
                      <Nav.Link className='link' href="/Contact">contact</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header