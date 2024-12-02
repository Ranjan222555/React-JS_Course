
import { createRoot } from 'react-dom/client';
import React, { StrictMode } from 'react';

import App from './App.jsx'
import New from './new.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <New/>
  </StrictMode>,
)

