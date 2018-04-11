import React from 'react';
import ReactDOM from 'react-dom';
import { render } from './tests/TestHelper';

import App from './App';

describe('<App />', () => {
  it('renders', () => {
    const wrapper = render(<App/>);
    expect(wrapper).toMatchSnapshot();
  });
});
