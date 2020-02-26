import React, { Fragment } from 'react';
import { careerSummary } from '../../assets/js/resumeStore';

const CareerSummary = () => (
  <section className="resume-section summary-section d-print-none mb-5 mb-lg-4">
    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
      Career Summary
    </h2>
    <div className="resume-section-content">
      <p className="mb-0">
        {careerSummary.map((paragraph, index, paragraphs) => (
          <Fragment key={index}>
            {paragraph}
            {index !== paragraphs.length - 1 && (
              <Fragment>
                <br />
                <br />
              </Fragment>
            )}
          </Fragment>
        ))}
      </p>
    </div>
  </section>
);

export default CareerSummary;
