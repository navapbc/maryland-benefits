import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './index';
import AppRecord from '../records/AppRecord';

const middlewares = [];

export function initialStore(initialState = {}) {
   const composeEnhancers = typeof window === 'undefined' ? compose : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    reducers,
    new AppRecord(),
    composeEnhancers(applyMiddleware(...middlewares))
  );
}


export default initialStore();
