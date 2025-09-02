import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/products', label: 'Products' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <div className="brand-main">AASTECH</div>
          <div className="brand-sub">ENERGY SOLUTIONS</div>
        </Link>
        
        <nav className="desktop-menu">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              className="nav-link"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <Link 
            key={link.path}
            to={link.path}
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <style jsx>{`
        /* Navbar Styles */
        .navbar {
          background-color: white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
        }

        .navbar-brand {
          text-decoration: none;
          display: flex;
          flex-direction: column;
        }

        .brand-main {
          font-size: 1.9rem;
          font-weight: bold;
          color: #2563eb;
          line-height: 1.2;
        }

        .brand-sub {
          font-size: 0.8rem;
          color: #1e293b;
          margin-top: -0.2rem;
          letter-spacing: 0.05rem;
        }

        /* Desktop Menu */
        .desktop-menu {
          display: none;
          gap: 2rem;
        }

        .nav-link {
          color: #1e293b;
          font-weight: 500;
          transition: color 0.3s ease;
          text-decoration: none;
        }

        .nav-link:hover {
          color: #2563eb;
        }

        /* Mobile Menu Toggle */
        .mobile-menu-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          color: #1e293b;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0.5rem;
        }

        /* Mobile Menu */
        .mobile-menu {
          display: none;
          background-color: white;
          padding: 1rem 2rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-menu.open {
          display: flex;
        }

        .mobile-nav-link {
          color: #1e293b;
          font-weight: 500;
          padding: 0.5rem 0;
          transition: color 0.3s ease;
          text-decoration: none;
        }

        .mobile-nav-link:hover {
          color: #2563eb;
        }

        /* Responsive Styles */
        @media (min-width: 768px) {
          .desktop-menu {
            display: flex;
          }

          .mobile-menu-toggle {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;