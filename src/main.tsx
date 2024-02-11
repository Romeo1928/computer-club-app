import { Suspense } from 'react';

import { MantineProvider } from '@mantine/core';
import ReactDOM from 'react-dom/client';

import { App } from 'App.tsx';

import './18n';
import '@mantine/core/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<div>Loading...</div>}>
    <MantineProvider>
      <App />
    </MantineProvider>
  </Suspense>,
);
