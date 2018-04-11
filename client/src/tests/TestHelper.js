import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import store from '../reducers/store';

export const render = (component, opts = { deep: false }) => {
  return opts.deep ? mount(component) : shallow(component);
};

export const renderWithStore = (component, opts = { deep: false }) => {
  const componentWithStore = <Provider store={store}>
    {component}
  </Provider>;
  return render(componentWithStore, opts);
};
