import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';

import './index.css';

import { store } from './redux/store';
import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);