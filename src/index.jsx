import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './component/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {comicReducer} from './reducer/comics';

const store = createStore(comicReducer); // change after filter

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
