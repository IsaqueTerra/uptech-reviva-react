import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './pages/home';
import './pages/home/Home.module.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

