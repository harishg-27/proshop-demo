import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { FaShoppingCart, FaUser} from 'react-icons/fa'
// import { LinkContainer} from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom'
// import logo from '../assets/logo.png'


const Header = () => {
    return (
        <header>
            <Container>
                <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                    <Container>
                    <NavLink as={NavLink} to="/">
                        <Navbar.Brand>ProShop</Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                        
                            <Nav.Link as={NavLink} to="/cart">
                            <FaShoppingCart /> Cart
                            </Nav.Link>
                        
                        
                            <Nav.Link as={NavLink} to="/login">
                            <FaUser /> Sign In
                            </Nav.Link>
                    
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>

            </Container>
        </header>
      );
}

export default Header
