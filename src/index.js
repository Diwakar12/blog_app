import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from "./store/store";

import App from './App';

const { store } = configureStore();


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <Router>
       <App />
     </Router>
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

