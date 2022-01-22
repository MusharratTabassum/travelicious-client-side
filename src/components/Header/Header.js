import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import "./Header.css"

const Header = () => {
    const { user, logOut, name } = useAuth();

    return (
        <div>
            <Navbar expand="lg" className='header' sticky="top">
                <Container fluid className='mx-4' >
                    <Navbar.Brand href="/" className='banner-logo'>Travelicious
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="my-2 mx-2 my-lg-0 ms-auto "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className='header-link' as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/about'>About</Nav.Link>
                            <Nav.Link as={Link} to='/contact' >Contact</Nav.Link>
                            <Nav.Link >
                                {user?.email ?
                                    <Nav.Link as={Link} to="/mytours">History</Nav.Link> : ''
                                }
                            </Nav.Link>
                            <Nav.Link >
                                {user?.email == 'admin123@gmail.com' ?
                                    <Nav.Link as={Link} to="/addservice">AddService</Nav.Link> : ''
                                }
                            </Nav.Link>
                            <Nav.Link className='ms-auto' >
                                {user?.email ?
                                    <Button className='nav-link logout-btn ' onClick={logOut} variant="light">Logout</Button> :
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