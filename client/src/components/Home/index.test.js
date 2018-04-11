import React from 'react';
import { render } from '../../tests/TestHelper';

import Home from './index';

describe('<Home />', () => {
  it('renders', () => {
    const wrapper = render(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
