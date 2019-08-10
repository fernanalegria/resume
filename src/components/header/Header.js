import React from 'react';
import { profileInfo, siteLinks, buttons } from '../../assets/js/resumeStore';
import SiteLink from './SiteLink';
import PseudoLink from './PseudoLink';
import ContactLink from './ContactLink';
import ReactToPrint from 'react-to-print';

const { name, jobTitle, email, phone, profilePic } = profileInfo;

const Header = ({ getResumeRef }) => (
  <header className="resume-header pt-4 pt-md-0">
    <div className="media flex-column flex-md-row">
      <img className="mr-3 img-fluid picture mx-auto" src={profilePic} alt="" />
      <div className="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
        <div className="primary-info">
          <h1 className="name mt-0 mb-1 text-white text-uppercase">{name}</h1>
          <div className="title mb-3">{jobTitle}</div>
          <ul className="list-unstyled">
            <li className="mb-2">
              <ContactLink
                href={`mailto:${email.trim()}`}
                icon="far fa-envelope"
                text={email}
              />
            </li>
            <li>
              <ContactLink
                href={`tel:${phone.replace(/ /g, '').replace('+', '00')}`}
                icon="fas fa-mobile-alt"
                text={phone}
              />
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
            {buttons.map(({ id, onClick, icon, text }) => (
              <li className="mb-3 d-print-none" key={id}>
                <PseudoLink onClick={onClick} icon={icon} text={text} />
              </li>
            ))}
            <li className="mb-3 d-print-none">
              <ReactToPrint
                trigger={() => (
                  <PseudoLink
                    onClick={() => {}}
                    icon="fas fa-file-pdf"
                    text="Print or download"
                  />
                )}
                content={() => getResumeRef()}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
