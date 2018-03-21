import React, { Component } from 'react';
import Router from './Routes';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="ds-base--inverse ds-u-padding--3 ds-u-display--flex ds-u-justify-content--between ds-u-align-items--center">
          <h1 className="ds-h3 ds-u-margin-bottom--0">
            <a href="/" title="Home" className="c-header__title">
              Maryland Benefits
            </a>
          </h1>
        </header>

        <div className="ds-l-row ds-u-margin--0 c-body--wrapper">
          {Router}
        </div>

        <footer className="ds-u-padding--3">
          <div>
            <a href="/" title="Home">Home</a>
            <a href="/about" title="About" className="ds-u-padding--1">About</a>
          </div>
          <div>
          Brought to you by Nava PBC and the <a href="https://design.cms.gov/" target="_none">
            Design System
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
