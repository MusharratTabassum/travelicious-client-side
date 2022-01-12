import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className='header'>
                <Container >
                    <Navbar.Brand href="#">Travelicious</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 mx-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link >Home</Nav.Link>
                            <Nav.Link >About</Nav.Link>
                            <Nav.Link >Contact</Nav.Link>
                            <Nav.Link >Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;