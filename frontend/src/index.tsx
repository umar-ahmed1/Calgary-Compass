import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import theme from "./themes/theme";
import { ThemeProvider } from "@mui/material/styles";
import { AuthContextProvider } from './hooks/AuthContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

