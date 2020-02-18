import React from 'react';
import { interests } from '../../../assets/js/resumeStore';

const Interests = () => (
  <section className="resume-section interests-section d-print-none mb-3">
    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
      Interests
    </h2>
    <div className="resume-section-content">
      <ul className="list-unstyled">
        {interests.map((interest, index) => (
          <li key={index} className="mb-1">
            {interest}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Interests;
