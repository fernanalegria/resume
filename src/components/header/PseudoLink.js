import React from 'react';

const PseudoLink = ({ onClick, icon, text }) => (
  <button className="btn-anchor" onClick={onClick} data-html2canvas-ignore>
    <span className="fa-container text-center mr-2">
      <i className={`${icon} fa-fw`} />
    </span>
    {text}
  </button>
);

export default PseudoLink;
