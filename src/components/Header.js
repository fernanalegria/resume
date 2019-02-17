import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { profileInfo, siteLinks } from '../assets/js/resumeStore';
import SiteLink from './SiteLink';

const { name, jobTitle, email, phone, profilePic } = profileInfo;

const Header = () => (
  <header className="resume-header pt-4 pt-md-0">
    <div className="media flex-column flex-md-row">
      <img className="mr-3 img-fluid picture mx-auto" src={profilePic} alt="" />
      <div className="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
        <div className="primary-info">
          <h1 className="name mt-0 mb-1 text-white text-uppercase">{name}</h1>
          <div className="title mb-3">{jobTitle}</div>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href={`mailto:${email.trim()}`}>
                <FontAwesomeIcon
                  icon={['far', 'envelope']}
                  className="fa-fw mr-2"
                  size="lg"
                />
                {email}
              </a>
            </li>
            <li>
              <a href={`tel:${phone.replace(/ /g, '').replace('+', '00')}`}>
                <FontAwesomeIcon
                  icon={['fas', 'mobile-alt']}
                  className="fa-fw mr-2"
                  size="lg"
                />
                {phone}
              </a>
            </li>
          </ul>
        </div>
        <div className="secondary-info ml-md-auto mt-2">
          <ul className="resume-social list-unstyled">
            {siteLinks.map(({ id, href, icon, text }) => (
              <li className="mb-3" key={id}>
                <SiteLink href={href} icon={icon} text={text} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
