import React from 'react';
import { useSelector } from 'react-redux';
import './Footer.css';

const Footer = () => {
  const profile = useSelector((s) => s.portfolio.profile);

  return (
    <footer className="footer" id="contact">
      <div className="container footer__inner">
        <div className="footer__info">
          <h3 className="footer__name">{profile?.name}</h3>
          <p className="footer__tagline">{profile?.title}</p>
        </div>
        <div className="footer__links">
          {profile?.email && (
            <a href={`mailto:${profile.email}`} className="footer__link">✉ {profile.email}</a>
          )}
          {profile?.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="footer__link">
              in LinkedIn
            </a>
          )}
        </div>
        <p className="footer__copy">© {new Date().getFullYear()} {profile?.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
