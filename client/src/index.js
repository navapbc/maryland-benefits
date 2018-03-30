import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './reducers/store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const app = <Provider store={store}>
  <App />
</Provider>;

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
