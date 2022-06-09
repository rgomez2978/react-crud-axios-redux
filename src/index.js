import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Al quitar el <React.StrictMode> en desarrollo se elimina la duplicidad
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

reportWebVitals();
