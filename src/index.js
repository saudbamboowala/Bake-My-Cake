import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Add this import
import CssBaseline from '@mui/material/CssBaseline'; // Optional for baseline CSS
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create a theme instance
const theme = createTheme({
  // You can customize your theme here
  // palette: {
  //   primary: { main: '#556cd6' },
  //   secondary: { main: '#19857b' },
  // },
});

// Create a root first, then render to it - React 18 style
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Optional but recommended for MUI */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();