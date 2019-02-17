import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SiteLink = ({ href, icon, text }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <span className="fa-container text-center mr-2">
      <FontAwesomeIcon icon={icon} className="fa-fw" size="sm" />
    </span>
    {text}
  </a>
);

export default SiteLink;
