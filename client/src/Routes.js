import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home';
import About from './components/About';

export const basePath = '';
export const Routes = {
  home: `${basePath}/`,
  about: `${basePath}/about`
};

// Router
export default <Router>
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
  </div>
</Router>;
