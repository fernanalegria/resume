import React, { Component } from 'react';

class PseudoLink extends Component {
  render() {
    const { onClick, icon, text } = this.props;
    return (
      <button className="btn-anchor" onClick={onClick} data-html2canvas-ignore>
        <span className="fa-container text-center mr-2">
          <i className={`${icon} fa-fw`} />
        </span>
        {text}
      </button>
    );
  }
}

export default PseudoLink;
