import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';
import logo from '../images/Artboard.png';
import {NavLink} from 'react-router-dom';
const Header = () => {
  return (
    <div id='header'>
        <Navbar expand="lg" className="bg-transparent">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="150"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle className='basic-btn text-secondary' aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                  <Nav className="me-auto w-100 justify-content-end">
                      <NavLink className='link me-4' to="/About">about</NavLink>
                      <NavLink className='link me-4' to="/Team">our team</NavLink>
                      <NavLink className='link me-4' to="/Services">services</NavLink>
                      <NavLink className='link me-4' to="/Portfolio">portfolio</NavLink>
                      <NavLink className='link me-4' to="/Contact">contact</NavLink>
                  </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header;