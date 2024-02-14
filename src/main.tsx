import { Suspense } from 'react';

import '@mantine/core/styles.css';
import 'firebase/firestore';
import 'firebase/auth';

import { MantineProvider } from '@mantine/core';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'App.tsx';

import 'i18n/18n';

// const firestore = firebase();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <MantineProvider>
        <App />
      </MantineProvider>
    </Suspense>
  </BrowserRouter>,
);
