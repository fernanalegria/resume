import React from 'react';

const BaseContainer = ({ children }) => (
  <article className="resume-wrapper text-center position-relative">
    <div className="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
      {children}
    </div>
  </article>
);

export default BaseContainer;
