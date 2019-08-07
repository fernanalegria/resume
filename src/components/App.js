import React, { Component } from 'react';
import BaseContainer from './BaseContainer';
import Resume from './Resume';
import ReactToPrint from 'react-to-print';

class App extends Component {
  render() {
    return (
      <BaseContainer>
        <Resume ref={el => (this.componentRef = el)} />
        <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => this.componentRef}
        />
      </BaseContainer>
    );
  }
}

export default App;
