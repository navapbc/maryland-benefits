import React from 'react';
import { shallow, mount } from 'enzyme';

export const render = (component, deep = false) => {
  return deep ? mount(component) : shallow(component);
}
