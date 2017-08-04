import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

let store = createStore(reducers, {categories: [{title: "initial", order: 0, id: 0}]});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);