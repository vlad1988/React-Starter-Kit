import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import todoApp from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

let store = createStore(todoApp, applyMiddleware(thunk));

console.log(store);


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('rootEl')
)
