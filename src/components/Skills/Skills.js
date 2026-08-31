import React from 'react';
import { useSelector } from 'react-redux';
import { toArray } from '../../utils/xmlParser';
import './Skills.css';

const LEVEL_WIDTH = { Expert: '95%', Advanced: '75%', Intermediate: '55%' };

const Skills = () => {
  const skills = useSelector((s) => s.portfolio.skills);
  if (!skills) return null;

  const categories = toArray(skills.category);
  const languages = toArray(skills.languages?.language);

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <h2 className="section__title">Skills</h2>
        <div className="skills__grid">
          {categories.map((cat, i) => {
            const catSkills = toArray(cat.skill);
            return (
              <div className="skills__category" key={i}>
                <h3 className="skills__cat-title">{cat._attributes?.name}</h3>
                <div className="skills__list">
                  {catSkills.map((skill, j) => {
                    const level = typeof skill === 'object' ? skill._attributes?.level : 'Advanced';
                    const name = typeof skill === 'object' ? skill._text : skill;
                    return (
                      <div className="skill-bar" key={j}>
                        <div className="skill-bar__info">
                          <span className="skill-bar__name">{name}</span>
                          <span className="skill-bar__level">{level}</span>
                        </div>
                        <div className="skill-bar__track">
                          <div
                            className="skill-bar__fill"
                            style={{ width: LEVEL_WIDTH[level] || '60%' }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {languages.length > 0 && (
          <div className="skills__languages">
            <h3 className="skills__cat-title">Languages</h3>
            <div className="skills__lang-list">
              {languages.map((lang, i) => {
                const proficiency = typeof lang === 'object' ? lang._attributes?.proficiency : '';
                const name = typeof lang === 'object' ? lang._text : lang;
                return (
                  <div className="lang-badge" key={i}>
                    <span className="lang-badge__name">{name}</span>
                    <span className="lang-badge__level">{proficiency}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
