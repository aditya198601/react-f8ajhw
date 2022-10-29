import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import App2 from './App2';
import Car from './Car';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Car />
  </StrictMode>
);
