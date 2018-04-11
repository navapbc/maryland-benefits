import React from 'react';
import { renderWithStore } from '../../tests/TestHelper';

import Test from './index';

describe('<Test />', () => {
  it('renders', () => {
    const wrapper = renderWithStore(<Test />);
    expect(wrapper).toMatchSnapshot();
  });
});
