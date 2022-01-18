import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import "./Header.css"

const Header = () => {
    const { user, logOut, name, photo } = useAuth();

    return (
        <div>
            <Navbar expand="lg" className='header' sticky="top">
                <Container fluid className='mx-4' >
                    <Navbar.Brand href="#" className='banner-logo'>Travelicious
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 mx-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className='header-link' as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/about'>About</Nav.Link>
                            <Nav.Link as={Link} to='/contact' >Contact</Nav.Link>
                            <Nav.Link >
                                {user?.email ?
                                    <Button className='nav-link logout-btn' onClick={logOut} variant="light">Logout</Button> :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                }
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;