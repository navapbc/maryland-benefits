import React from 'react';
import { Iterable } from 'immutable';

// ToJS is a higher-order component that converts all Immutable.js objects
// into POJO before passing them down into into rendered components.
// This allows for the performance optimizations of Immutable.js in our reducers,
// without requiring immutableJS everywhere in the react code
const ToJS = WrappedComponent => wrappedComponentProps => {
  const KEY = 0;
  const VALUE = 1;

  const propsJS = Object.entries(
    wrappedComponentProps
  ).reduce((newProps, wrappedComponentProp) => {
    newProps[wrappedComponentProp[KEY]] = Iterable.isIterable(
      wrappedComponentProp[VALUE]
    )
      ? wrappedComponentProp[VALUE].toJS()
      : wrappedComponentProp[VALUE];
    return newProps;
  }, {});

  return <WrappedComponent {...propsJS} />;
};

export default ToJS;
