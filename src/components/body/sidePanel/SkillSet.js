import React from 'react';

const SkillSet = ({ skillSet: { title, weightable, items } }) => (
  <div className="resume-skill-item">
    <h4 className="resume-skills-cat font-weight-bold">{title}</h4>
    {weightable ? (
      <ul className="list-unstyled mb-4">
        {items.map((item, index) => (
          <li key={index} className="mb-2">
            <div className="resume-skill-name">{item.name}</div>
            <div className="progress resume-progress">
              <div
                className="progress-bar theme-progress-bar-dark"
                role="progressbar"
                style={{ width: `${item.value}%` }}
                aria-valuenow={item.value}
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <ul className="list-inline">
        {items.map((item, index) => (
          <li key={index} className="list-inline-item">
            <span className="badge badge-light">{item}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default SkillSet;
