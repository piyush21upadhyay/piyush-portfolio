import React, { useState, useEffect } from 'react';
import './Header.css';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Awards', href: '#awards' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when a nav link is clicked
  const handleLinkClick = () => setMenuOpen(false);

  // Close menu on outside click / resize to desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="header">
      <div className="header__brand">Piyush Upadhyay</div>

      <button
        className={`header__hamburger${menuOpen ? ' header__hamburger--open' : ''}`}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`header__nav${menuOpen ? ' header__nav--open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="header__nav-link" onClick={handleLinkClick}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
