import React from 'react';
import { useSelector } from 'react-redux';
import { toArray } from '../../utils/xmlParser';
import './About.css';

const About = () => {
  const profile = useSelector((s) => s.portfolio.profile);
  if (!profile) return null;

  const achievements = toArray(profile.achievements?.achievement);
  const techAreas = toArray(profile.technicalFocus?.area);

  return (
    <section className="section about" id="about">
      <div className="container">
        <h2 className="section__title">About Me</h2>
        <div className="about__grid">
          <div className="about__summary">
            <p className="about__text">{profile.summary}</p>
            <div className="about__contact">
              <a href={`mailto:${profile.email}`} className="about__link">
                <span className="about__link-icon">✉</span> {profile.email}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="about__link">
                <span className="about__link-icon">in</span> LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="about__tech-focus">
            <h3 className="about__subtitle">Technical Focus Areas</h3>
            {techAreas.map((area, i) => (
              <div className="about__tech-item" key={i}>
                <span className="about__tech-category">{area.category}</span>
                <span className="about__tech-details">{area.details}</span>
              </div>
            ))}
          </div>
        </div>

        <h3 className="about__subtitle about__achievements-title">Key Achievements</h3>
        <div className="about__achievements">
          {achievements.map((a, i) => (
            <div className="achievement-card" key={i}>
              <div className="achievement-card__metric">{a.metric}</div>
              <p className="achievement-card__desc">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
