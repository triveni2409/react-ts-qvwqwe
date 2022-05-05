import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

//import App from './App';
//import App from './envAssignment_01/App';
//import App from './jsxAssignment_01/App';
import App from './jsxAssignment_02/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
