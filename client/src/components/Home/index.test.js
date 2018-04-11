import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '../../tests/TestHelper';

import Home from './index';

describe('<Home />', () => {
  it('renders', () => {
    const wrapper = render(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
