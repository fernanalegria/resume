import React from 'react';
import { volunteering } from '../../../assets/js/resumeStore';

const Volunteering = () => (
  <section className="resume-section volunteering-section d-print-none mb-5 mb-lg-3">
    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
    Volunteering
    </h2>
    <div className="resume-section-content">
      <ul className="list-unstyled">
        {volunteering.map(({ id, title, entity, from, to }) => (
          <li key={id} className="mb-2">
            <div className="resume-degree font-weight-bold">{title}</div>
            <div className="resume-degree-org">{entity}</div>
            <div className="resume-degree-time">{`${from} - ${to}`}</div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Volunteering;
