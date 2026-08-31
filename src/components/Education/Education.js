import React from 'react';
import { useSelector } from 'react-redux';
import { toArray } from '../../utils/xmlParser';
import './Education.css';

const Education = () => {
  const education = useSelector((s) => s.portfolio.education);
  if (!education) return null;

  const institutions = toArray(education.institution);

  return (
    <section className="section education" id="education">
      <div className="container">
        <h2 className="section__title">Education</h2>
        <div className="edu__list">
          {institutions.map((inst, i) => (
            <div className="edu-card" key={i}>
              <div className="edu-card__icon">🎓</div>
              <div className="edu-card__body">
                <h3 className="edu-card__degree">{inst.degree}</h3>
                <p className="edu-card__field">{inst.field}</p>
                <p className="edu-card__institution">{inst.name}</p>
                {inst.startYear && inst.startYear.trim() && (
                  <span className="edu-card__years">{inst.startYear} – {inst.endYear}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
