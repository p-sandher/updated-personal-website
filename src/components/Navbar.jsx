import { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import resumePdf from '../assets/Puneet_Sandher_Resume_Portfolio.pdf';

const NavBar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const isActive = (path) => location.pathname === path;
  const closeMenu = () => setMenuOpen(false);

  const handleKeyDown = (event) => {
    if (event.key === 'Escape' && menuOpen) {
      closeMenu();
      // Restore keyboard focus before the collapsed menu hides its links.
      menuButtonRef.current?.focus();
    }
  };

  return (
    <header className='header'>
      <nav
        className={`site-nav-shell${isHome ? ' site-nav-shell-home' : ''}`}
        aria-label='Primary navigation'
        onKeyDown={handleKeyDown}
      >
        <button
          ref={menuButtonRef}
          type='button'
          className='site-nav-toggle'
          aria-expanded={menuOpen}
          aria-controls='site-navbar-nav'
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Close menu' : 'Menu'}
        </button>
        <div id='site-navbar-nav' className={`site-nav-menu${menuOpen ? ' is-open' : ''}`}>
          <div className='site-nav-links'>
            <Link
              to='/'
              onClick={closeMenu}
              aria-current={isActive('/') ? 'page' : undefined}
              className='site-nav-link'
            >
              Home
            </Link>
            <Link
              to='/about'
              onClick={closeMenu}
              aria-current={isActive('/about') ? 'page' : undefined}
              className='site-nav-link'
            >
              About Me
            </Link>
            <Link
              to='/projects'
              onClick={closeMenu}
              aria-current={isActive('/projects') ? 'page' : undefined}
              className='site-nav-link'
            >
              Projects
            </Link>
            <a
              href={resumePdf}
              onClick={closeMenu}
              target='_blank'
              rel='noopener noreferrer'
              className='site-nav-link'
            >
              Resume
            </a>
            <Link
              to='/contact'
              onClick={closeMenu}
              aria-current={isActive('/contact') ? 'page' : undefined}
              className='site-nav-contact'
            >
              Contact Me
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
