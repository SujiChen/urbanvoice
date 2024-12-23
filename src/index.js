import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure this path is correct

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.render(<App />, rootElement);
} else {
  console.error('Root element not found');
}