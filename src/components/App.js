import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMobileAlt, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import BaseContainer from './BaseContainer';
import Resume from './Resume';

const App = () => (
  <BaseContainer>
    <Resume />
  </BaseContainer>
);

library.add([faEnvelope, faMobileAlt, faLinkedinIn, faGithub, faFilePdf]);

export default App;
