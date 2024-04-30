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
    
    <header className="header" style={{ backgroundColor: isHomePage ? 'transparent' : '#8FBC8B' }}>

        <div>
            <Navbar bg={isHomePage ? "transparent" : "#8FBC8B"} variant="dark" sticky="top" expand="sm" collapseOnSelect>


                <Navbar.Toggle className="coloring" />
                <Navbar.Collapse>
                    <Nav className="ms-auto">  {/* This class pushes the nav to the right */}
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About Me</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="https://drive.google.com/file/d/1cizJZ4RY5bGRrgWTDf-Zkn177eMI_QSU/view?usp=sharing" target="_blank">Resume</Nav.Link>
                        <Nav.Link href="/contact" className='contact_btn'>Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    </header>
  )
}

export default NavBar
