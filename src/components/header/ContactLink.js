import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactLink = ({ href, icon, text }) => (
  <a href={href}>
    <FontAwesomeIcon icon={icon} className="fa-fw mr-2" size="lg" />
    {text}
  </a>
);

export default ContactLink;
