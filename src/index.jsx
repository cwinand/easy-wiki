import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import './styles/styles.scss';
import 'font-awesome/scss/font-awesome.scss';

import { apiGetCategories } from './actions/categories';

import App from './components/App';
import reducers from './reducers';

let store = createStore( reducers, applyMiddleware( thunkMiddleware ) );

store.dispatch( apiGetCategories() )

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById( 'app' )
);