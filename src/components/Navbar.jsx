import { useLocation } from 'react-router-dom'
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

  return (
    
    <header className="header">

        <div>
            <Navbar className="site-nav-shell" variant="dark" sticky="top" expand="sm" collapseOnSelect>


                <Navbar.Toggle className="coloring" />
                <Navbar.Collapse>
                    <Nav className="ms-auto">  {/* This class pushes the nav to the right */}
                        <Nav.Link href="/" className={`nav-pill-link ${isActive('/') ? 'nav-pill-link-active' : ''}`}>Home</Nav.Link>
                        <Nav.Link href="/about" className={`nav-pill-link ${isActive('/about') ? 'nav-pill-link-active' : ''}`}>About Me</Nav.Link>
                        <Nav.Link href="/projects" className={`nav-pill-link ${isActive('/projects') ? 'nav-pill-link-active' : ''}`}>Projects</Nav.Link>
                        <Nav.Link href="https://drive.google.com/file/d/1_DGuxBLElAioKg9r1DjKuKqn8epbHmOi/view?usp=sharing" target="_blank" className="nav-pill-link">Resume</Nav.Link>
                        <Nav.Link href="/contact" className={`contact_btn ${isActive('/contact') ? 'nav-pill-link-active' : ''}`}>Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    </header>
  )
}

export default NavBar
