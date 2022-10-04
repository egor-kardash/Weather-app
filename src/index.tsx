import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from '@/components';

import { GlobalStyles } from './globalStyles';
import { persistor, store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <GlobalStyles/>
      <App />
    </PersistGate>
  </Provider>
);
