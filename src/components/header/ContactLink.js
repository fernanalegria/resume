import React from 'react';

const ContactLink = ({ href, icon, text }) => (
  <a href={href}>
    <i className={`${icon} fa-fw fa-lg mr-2`} />
    {text}
  </a>
);

export default ContactLink;
