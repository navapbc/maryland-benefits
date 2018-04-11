import React from 'react';
import { render } from './tests/TestHelper';

import App from './App';

describe('<App />', () => {
  it('renders', () => {
    const wrapper = render(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
