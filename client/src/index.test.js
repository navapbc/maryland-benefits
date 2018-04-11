import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { app } from './index.js';

jest.mock('./registerServiceWorker');
jest.mock('react-dom');

describe('App Index', () => {
  it('registers service worker', () => {
    expect(registerServiceWorker).toHaveBeenCalledTimes(1);
  });

  it('renders app into dom', () => {
    expect(render).toHaveBeenCalledTimes(1);
  });

  it('renders a react app', () => {
    expect(render.mock.calls[0][0]).toEqual(app);
  });
});
