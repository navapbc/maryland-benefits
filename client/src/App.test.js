import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from './tests/TestHelper';

describe('<App />', () => {
  it('renders', () => {
    const wrapper = render(<App/>);
    expect(wrapper.find('.app-component').length).toEqual(1);
  });
});
