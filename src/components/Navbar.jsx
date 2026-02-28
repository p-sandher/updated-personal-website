import { Link, useLocation } from 'react-router-dom'
import { Navbar, Nav } from "react-bootstrap";
import resumePdf from '../assets/Puneet_Sandher_Resume_Portfolio.pdf';

const NavBar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

  return (
    
    <header className="header">

        <div>
            <Navbar className="site-nav-shell" variant="dark" sticky="top" expand="sm" collapseOnSelect>


                <Navbar.Toggle className="coloring" aria-controls="site-navbar-nav" />
                <Navbar.Collapse id="site-navbar-nav">
                    <Nav className="nav-pill-group">
                        <Nav.Link as={Link} to="/" className={`nav-pill-link ${isActive('/') ? 'nav-pill-link-active' : ''}`}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" className={`nav-pill-link ${isActive('/about') ? 'nav-pill-link-active' : ''}`}>About Me</Nav.Link>
                        <Nav.Link as={Link} to="/projects" className={`nav-pill-link ${isActive('/projects') ? 'nav-pill-link-active' : ''}`}>Projects</Nav.Link>
                        <Nav.Link href={resumePdf} target="_blank" rel="noopener noreferrer" className="nav-pill-link">Resume</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className={`contact_btn ${isActive('/contact') ? 'nav-pill-link-active' : ''}`}>Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    </header>
  )
}

export default NavBar
