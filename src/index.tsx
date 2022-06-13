import React from 'react';
import ReactDOM from 'react-dom/client';
import Cart from './pages/cart';
import Home from './pages/home';
import './pages/home/Home.module.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Home />
    {/* <Cart /> */}
  </React.StrictMode>
);

