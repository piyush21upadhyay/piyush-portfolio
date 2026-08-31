import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { toArray } from '../../utils/xmlParser';
import './Experience.css';

const Experience = () => {
  const experience = useSelector((s) => s.portfolio.experience);
  const [activeCompany, setActiveCompany] = useState(0);

  if (!experience) return null;
  const companies = toArray(experience.company);

  const active = companies[activeCompany];
  const roles = toArray(active?.roles?.role);

  return (
    <section className="section experience" id="experience">
      <div className="container">
        <h2 className="section__title">Experience</h2>
        <div className="experience__layout">
          <aside className="experience__sidebar">
            {companies.map((company, i) => (
              <button
                key={i}
                className={`exp__company-btn${activeCompany === i ? ' exp__company-btn--active' : ''}`}
                onClick={() => setActiveCompany(i)}
              >
                <span className="exp__company-name">{company.name}</span>
                <span className="exp__company-duration">{company.totalDuration}</span>
              </button>
            ))}
          </aside>

          <div className="experience__roles">
            {roles.map((role, i) => (
              <div className="role-card" key={i}>
                <div className="role-card__header">
                  <div>
                    <h3 className="role-card__title">{role.title}</h3>
                    <p className="role-card__company">{active.name}</p>
                  </div>
                  <div className="role-card__meta">
                    <span className="role-card__dates">{role.startDate} – {role.endDate}</span>
                    <span className="role-card__duration">{role.duration}</span>
                    <span className="role-card__location">📍 {role.location}</span>
                  </div>
                </div>
                <p className="role-card__desc">{role.description}</p>
                <ul className="role-card__contributions">
                  {toArray(role.contributions?.item).map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
                {role.techStack && role.techStack.trim() && (
                  <div className="role-card__stack">
                    {role.techStack.split('|').map((t, k) => (
                      <span key={k} className="role-card__tag">{t.trim()}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
