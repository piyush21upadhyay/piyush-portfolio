import React from 'react';
import { useSelector } from 'react-redux';
import { toArray } from '../../utils/xmlParser';
import './Awards.css';

const Awards = () => {
  const awards = useSelector((s) => s.portfolio.awards);
  if (!awards) return null;

  const awardList = toArray(awards.award);

  return (
    <section className="section awards" id="awards">
      <div className="container">
        <h2 className="section__title">Honors &amp; Awards</h2>
        <div className="awards__grid">
          {awardList.map((award, i) => (
            <div className="award-card" key={i}>
              <div className="award-card__star">★</div>
              <h3 className="award-card__title">{award.title}</h3>
              <p className="award-card__desc">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
