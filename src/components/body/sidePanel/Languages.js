import React from 'react';
import { languages } from '../../../assets/js/resumeStore';

const Languages = () => (
  <section className="resume-section language-section mb-3">
    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
      Languages
    </h2>
    <div className="resume-section-content">
      <ul className="list-unstyled resume-lang-list">
        {languages.map(({ id, language, level }) => (
          <li key={id} className="mb-2">
            <span className="resume-lang-name font-weight-bold">
              {language}
            </span>{' '}
            <small className="text-muted font-weight-normal">{`(${level})`}</small>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Languages;
