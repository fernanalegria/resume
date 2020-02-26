import React from 'react';
import { skillSets } from '../../../assets/js/resumeStore';
import SkillSet from './SkillSet.js';

const Skills = () => (
  <section className="resume-section skills-section mb-5 mb-lg-3">
    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
      Skills &amp; Tools
    </h2>
    <div className="resume-section-content">
      {skillSets.map(skillSet => (
        <SkillSet skillSet={skillSet} key={skillSet.id} />
      ))}
    </div>
  </section>
);

export default Skills;
