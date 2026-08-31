import React from 'react';
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
  return (
    <header className="header">
      <div className="header__brand">Piyush Upadhyay</div>
      <nav className="header__nav">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="header__nav-link">
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
