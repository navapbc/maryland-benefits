import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '../../tests/TestHelper';
import { Map } from 'immutable';

import ToJS from './index';

// Example component that contains a prop called `foo`
// which is an object.
const ExampleComponent = ({ foo }) => {
  return <div>{foo.bar}</div>
}

const foo = Map({ bar: 'success' });

const setup = (_props = {}) => {
  const props = Object.assign({}, _props, { foo });
  const Component = ToJS(ExampleComponent);
  const wrapper = render(<Component {...props} />);

  return {
    props,
    wrapper
  }
};

describe('ToJS', () => {
  it('returns the same component', () => {
    const { wrapper } = setup();
    expect(wrapper.containsMatchingElement(<ExampleComponent />)).toEqual(true);
  });

  it('converts props to POJO', () => {
    const { wrapper } = setup();
    expect(wrapper.props().foo.bar).toEqual('success');
  });

  it('passes along non-object props', () => {
    const stringProp = 'fun';
    const { wrapper } = setup({ stringProp });
    expect(wrapper.props().stringProp).toEqual(stringProp);
  });
});
