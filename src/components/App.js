import React, { Component } from 'react';
import BaseContainer from './BaseContainer';
import Resume from './Resume';

class App extends Component {
  getResumeRef = () => this.resumeRef;

  render() {
    return (
      <BaseContainer>
        <Resume
          ref={el => (this.resumeRef = el)}
          getResumeRef={this.getResumeRef}
        />
      </BaseContainer>
    );
  }
}

export default App;
