import React from 'react';
import { render } from '../../tests/TestHelper';

import About from './index';

describe('<About />', () => {
  it('renders', () => {
    const wrapper = render(<About />);
    expect(wrapper).toMatchSnapshot();
  });
});
