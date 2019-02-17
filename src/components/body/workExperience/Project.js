import React, { Fragment } from 'react';

const Project = ({ project: { heading, description = '', stack = [] } }) => (
  <Fragment>
    <h4 className="resume-timeline-item-desc-heading font-weight-bold">
      {heading}
    </h4>
    {Array.isArray(description) ? (
      <div>
        <ul className="mb-1">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    ) : (
      <p className="mb-1">{description}</p>
    )}
    <ul className="list-inline">
      {stack.map((technology, index) => (
        <li key={index} className="list-inline-item">
          <span className="badge badge-primary badge-pill">{technology}</span>
        </li>
      ))}
    </ul>
  </Fragment>
);

export default Project;
