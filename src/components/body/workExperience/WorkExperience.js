import React from 'react';
import { workExperience } from '../../../assets/js/resumeStore';
import CompanyExperience from './CompanyExperience';

const WorkExperience = () => (
  <section className="resume-section experience-section mb-5 mb-lg-3">
    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
      Work Experience
    </h2>
    <div className="resume-section-content">
      <div className="resume-timeline position-relative">
        {workExperience.map((experience, index, experiences) => (
          <CompanyExperience
            key={experience.id}
            exp={experience}
            className={index === experiences.length - 1 ? '' : 'pb-2'}
          />
        ))}
      </div>
    </div>
  </section>
);

export default WorkExperience;
