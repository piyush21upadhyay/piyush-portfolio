import React from 'react';
import { useSelector } from 'react-redux';
import { toArray } from '../../utils/xmlParser';
import './Hero.css';

const Hero = () => {
  const profile = useSelector((s) => s.portfolio.profile);
  if (!profile) return null;

  const achievements = toArray(profile.achievements?.achievement);

  return (
    <section className="hero" id="home">
      <div className="hero__particles" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="particle" style={{ '--delay': `${i * 0.4}s`, '--x': `${Math.random() * 100}%` }} />
        ))}
      </div>
      <div className="hero__content">
        <p className="hero__greeting">Hello, I'm</p>
        <h1 className="hero__name">{profile.name}</h1>
        <h2 className="hero__title">{profile.title}</h2>
        <p className="hero__tagline">{profile.tagline}</p>
        <p className="hero__location">📍 {profile.location}</p>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-value">{profile.yearsOfExperience}</span>
            <span className="hero__stat-label">Years Experience</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-value">{achievements.length}</span>
            <span className="hero__stat-label">Key Achievements</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-value">4+</span>
            <span className="hero__stat-label">Companies</span>
          </div>
        </div>

        <div className="hero__cta">
          <a href="#experience" className="btn btn--primary">View Experience</a>
          <a href={`mailto:${profile.email}`} className="btn btn--outline">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
