// import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from '../assets/icons/logo_test.svg'
import navIcon1 from '../assets/icons/nav-icon1.svg'
import navIcon2 from '../assets/icons/nav-icon2.svg'
import navIcon3 from '../assets/icons/nav-icon3.svg'


const NavBar = () => {

    const location = useLocation();
    const isHomePage = location.pathname === '/';  
  return (
    
    // <header className="header">
    <header className="header" style={{ backgroundColor: isHomePage ? 'transparent' : '#8FBC8B' }}>

        <div>
            {/* <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect> */}
            <Navbar bg={isHomePage ? "transparent" : "#8FBC8B"} variant="dark" sticky="top" expand="sm" collapseOnSelect>

                {/* <Navbar.Brand>
                    <img src={logo} width="40px" height="40px" alt="Logo" />{' '}
                </Navbar.Brand> */}

                <Navbar.Toggle className="coloring" />
                <Navbar.Collapse>
                    <Nav className="ms-auto">  {/* This class pushes the nav to the right */}
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About Me</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/contact" >Resume</Nav.Link>
                        <Nav.Link href="/contact" className='contact_btn'>Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    </header>
  )
}

export default NavBar


 {/* <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className="blue-gradient_text">PS</p>
        </NavLink> */}

        {/*<nav className='flex text-lg gap-12 font-medium'>
            <NavLink
                to="/about"
                className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}
            >
                About
            </NavLink>

            <NavLink
                to="/projects"
                className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}
            >
                Projects
            </NavLink>

            <NavLink
                to="/resume"  // Updated the path which was previously incorrect
                className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}
            >
                Resume
            </NavLink>

            <NavLink
                to="/contact"
                className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}
            >
                Contact Me
            </NavLink>
            </nav> */}