import React, { Fragment } from 'react';
import Header from './header/Header';
import Body from './body/Body';
import CareerSummary from './body/CareerSummary';
import WorkExperience from './body/workExperience/WorkExperience';
import Skills from './body/sidePanel/Skills';
import Education from './body/sidePanel/Education';
import Volunteering from './body/sidePanel/Volunteering';
import Languages from './body/sidePanel/Languages';
import Interests from './body/sidePanel/Interests';

const Resume = () => (
  <Fragment>
    <Header />
    <Body>
      <div className="row">
        <div className="col-lg-9">
          <CareerSummary />
          <WorkExperience />
        </div>
        <div className="col-lg-3">
          <Skills />
          <Education />
          <Volunteering />
          <Languages />
          <Interests />
        </div>
      </div>
    </Body>
  </Fragment>
);

export default Resume;
