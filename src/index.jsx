import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './component/App';
import { Provider } from 'react-redux';
import rootReducer from './reducer/index';
import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={rootReducer.store}>
      <PersistGate loading={null} persistor={rootReducer.persistor} >
       <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
