import React from 'react';
import ReactDOM from 'react-dom/client';
import AppBar from './components/AppBar/AppBar';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppBar />
    </Provider>
  </React.StrictMode>
);
