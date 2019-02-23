import React from 'react';

const SiteLink = ({ href, icon, text }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <span className="fa-container text-center mr-2">
      <i className={`${icon} fa-fw`} />
    </span>
    {text}
  </a>
);

export default SiteLink;
