import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from '../Icon/Cart';
import Search from '../Icon/Search';
import './nav-bar-act.css';

function Navbaract() {
  return (
    <Navbar expand="lg" className='navbar-style'>
        <Navbar.Brand href="#home"><p>PISTONS</p></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className='navbar-link-style'>
            <Nav className="">
              <Nav.Link href="#home">NEW</Nav.Link>
              <Nav.Link href="#link">BRAND</Nav.Link>
              <Nav.Link href="#link">COLLECTIONS</Nav.Link>
              <Nav.Link href="#link">ACCESSORIES</Nav.Link>
              <Nav.Link href="#link">ABOUT</Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
        <div class='navbar-icon'>
          <div>
          <Nav.Link href="#link" class=''><Cart></Cart></Nav.Link>
          </div>
          <div>
          <Nav.Link href="#link" class=''><Search></Search></Nav.Link>
          </div>
        </div>
    </Navbar>
  );
}

export default Navbaract;
