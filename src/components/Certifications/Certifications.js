import React from 'react';
import { useSelector } from 'react-redux';
import { toArray } from '../../utils/xmlParser';
import './Certifications.css';

const TYPE_ICONS = { Professional: '🏆', Associate: '🎖', Online: '🎓' };

const Certifications = () => {
  const certifications = useSelector((s) => s.portfolio.certifications);
  if (!certifications) return null;

  const certs = toArray(certifications.certification);

  return (
    <section className="section certifications" id="certifications">
      <div className="container">
        <h2 className="section__title">Certifications</h2>
        <div className="certs__grid">
          {certs.map((cert, i) => (
            <div className="cert-card" key={i}>
              <div className="cert-card__icon">{TYPE_ICONS[cert.type] || '📜'}</div>
              <div className="cert-card__body">
                <h3 className="cert-card__name">{cert.name}</h3>
                <p className="cert-card__issuer">{cert.issuer}</p>
                {cert.code && cert.code.trim() && (
                  <span className="cert-card__code">Code: {cert.code}</span>
                )}
                <span className={`cert-card__type cert-card__type--${cert.type?.toLowerCase()}`}>
                  {cert.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
