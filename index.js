import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import todoApp from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

let store = createStore(todoApp, applyMiddleware(thunk));
function fetchSauce(){
  return fetch('https://www.google.com/search?q=secret+sauce');
}
console.log(store);
console.log(fetchSauce());
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('rootEl')
)
