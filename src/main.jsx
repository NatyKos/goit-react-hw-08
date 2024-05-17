import React from 'react';
import ReactDOM from 'react-dom/client';
import AppBar from './components/AppBar/AppBar';
import './index.css';
// import { Provider } from 'react-redux';
// import { store, persistor } from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <PersistGate persistor={persistor}> */}
    <AppBar />
    {/* </PersistGate> */}
    {/* </Provider> */}
  </React.StrictMode>
);
