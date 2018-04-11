import React from 'react';
import { render } from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

jest.mock('./registerServiceWorker');
jest.mock('react-dom');

import { app } from './index.js';

describe('App Index', () => {
  it('registers service worker', () => {
    expect(registerServiceWorker).toHaveBeenCalledTimes(1);
  });

  it('renders app into dom', () => {
    expect(render).toHaveBeenCalledTimes(1);
  });

});
