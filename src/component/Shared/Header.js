import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import logo from './../../img/logo/logo2.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = UseAuth();
    const style = {
        color: "white"
    }
    return (
        <div className="">
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <img className="logo me-2" src={logo} alt="" />
                    <Navbar.Brand className="logo-name fs-3">EDUCAHUB</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto fw-bold">
                            <NavLink activeStyle={style} className="nav-link" to="/home">Home</NavLink>
                            <NavLink activeStyle={style} className="nav-link" to="/services">Services</NavLink>
                            <NavLink activeStyle={style} className="nav-link" to="/about-us">About Us</NavLink>

                        </Nav>
                        <Nav>

                            {
                                user.email ?
                                    <div>
                                        <Navbar.Text className="me-2" >
                                            Hi, {user.displayName}
                                        </Navbar.Text>
                                        
                                            <NavLink onClick={logOut} to="/home">
                                                <button className="btn btn-col py-1 px-3">Logout</button>
                                            </NavLink>
                                        
                                    </div> :
                                    
                                        <NavLink className="btn btn-col py-1 px-3" to="/login">Login</NavLink>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;