import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CustomRoutes } from './Routes';
import { BrowserRouter } from 'react-router';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <CustomRoutes />
  </BrowserRouter>
);