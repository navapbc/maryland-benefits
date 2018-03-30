import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Routes from './routes';

// CSS
import './App.css';

// Page Components
import Home from './components/Home';
import About from './components/About';
import Test from './components/Test';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='app-component ds-base'>
          <header className='ds-base--inverse ds-u-padding--3 ds-u-display--flex ds-u-justify-content--between ds-u-align-items--center'>
            <h1 className='ds-h3 ds-u-margin-bottom--0'>
              <Link to='/' title='Home' className='c-header__title ds-u-text-decoration--none ds-u-color--base-inverse'>
                Maryland Benefits
              </Link>
            </h1>
          </header>

          <div className='ds-l-row ds-u-margin--0 c-body--wrapper'>
            <div>
              <Route
                exact
                path={Routes.home}
                component={Home}
              />
              <Route
                exact
                path={Routes.about}
                component={About}
              />
              <Route
                exact
                path={Routes.test}
                component={Test}
              />
            </div>
          </div>

          <footer className='ds-u-padding--3'>
            <div>
              <Link to='/' title='Home'>Home</Link>
              <Link to='/about' title='About' className='ds-u-padding--1'>About</Link>
            </div>

            <div className='ds-u-padding-y--3'>
              Brought to you by <a href='https://www.navapbc.com'>Nava PBC</a>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
