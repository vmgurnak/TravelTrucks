import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize/modern-normalize.css';

import App from './App.jsx';

import './index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {' '}
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
