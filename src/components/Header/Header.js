import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth'
import './Header.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';


const Header = () => {
    const {user, logout} = useAuth();
    return (
        <Navbar expand="lg">
            <Container>
            <Navbar.Brand><Link to="/home">
                <img alt="" src={logo} className="d-inline-block align-top" />
                </Link>
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Nav>
                    <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/doctors">Doctors</Link></Nav.Link>
                    <Nav.Link><Link to="/contact-us">Contact Us</Link></Nav.Link>
                    <Nav.Link><Link to="/login">{!user.email ? 'Login' : <button className="btn btn-info text-white" onClick={logout}>LogOut</button>}</Link></Nav.Link>
                    {user.email && <Navbar.Text className="text-white mx-4">
                        Signed in as: {user.displayName}
                    </Navbar.Text>}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;