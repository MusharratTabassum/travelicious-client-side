import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import "./Header.css"

const Header = () => {
    const { user, logOut } = useAuth();

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
                            <Nav.Link className='header-link' as={Link} to='/about'>About</Nav.Link>
                            <Nav.Link className='header-link' as={Link} to='/contact' >Contact</Nav.Link>
                            <div className='d-flex ms-auto'>
                                <Nav.Link className='header-link'>
                                    {user?.email ?
                                        <Nav.Link as={Link} to="/bookings">MyBooking</Nav.Link> : ''
                                    }
                                </Nav.Link>
                                <Nav.Link className='header-link'>
                                    {user?.email ?
                                        <Nav.Link as={Link} to="/allbookings">AllBooking</Nav.Link> : ''
                                    }
                                </Nav.Link>
                                <Nav.Link className='header-link'>
                                    {user?.email == 'admin123@gmail.com' ?
                                        <div className="d-flex">
                                            <Nav.Link as={Link} to="/addservice">AddService</Nav.Link>
                                            <Nav.Link as={Link} to="/managebooking">ManageBooking</Nav.Link>

                                        </div>
                                        : ''
                                    }
                                </Nav.Link>

                                <Nav.Link className='header-link'>
                                    {user?.email ?
                                        <Nav.Link as={Link} to="/">Hello! {user.displayName}</Nav.Link> : ''
                                    }
                                </Nav.Link>

                                <Nav.Link className='ms-auto header-link' >
                                    {user?.email ?
                                        <Button className='nav-link logout-btn ' onClick={logOut} variant="light">Logout</Button> :
                                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                    }
                                </Nav.Link>

                            </div>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;