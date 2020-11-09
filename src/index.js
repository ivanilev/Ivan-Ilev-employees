import React from 'react';
import { render } from 'react-dom';
import store from './store';
import { Provider } from 'react-redux'

import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.scss';


render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
