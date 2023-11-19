import React from "react";
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { persistor, store } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './assets/fonts/stylesheet.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter basename="car-rent-platform">
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </BrowserRouter>
  </React.StrictMode>
);

