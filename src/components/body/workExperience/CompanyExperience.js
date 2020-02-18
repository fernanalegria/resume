import React, { Fragment } from 'react';
import Project from './Project';

const CompanyExperience = ({
  exp: {
    jobTitle,
    from,
    to,
    company: { name, logo },
    projects
  },
  className = ''
}) => (
  <article className={`resume-timeline-item position-relative ${className}`}>
    <div className="resume-timeline-item-header mb-2">
      <h3 className="resume-position-title font-weight-bold mb-1">
        <Fragment>
          {`${jobTitle.name} `}
          {jobTitle.subcategory && (
            <small className="text-muted">{`(${jobTitle.subcategory}) `}</small>
          )}
          <small className="text-muted">{`@ ${name}`}</small>
        </Fragment>
      </h3>
      <div className="resume-position-time">{`${from} - ${to}`}</div>
      {logo ? (
        <img
          className="resume-company-logo top-right-icon"
          src={logo}
          alt={name}
        />
      ) : null}
    </div>
    <div className="resume-timeline-item-desc">
      {projects.map(project => (
        <Project project={project} key={project.id} />
      ))}
    </div>
  </article>
);

export default CompanyExperience;
