import { useState } from 'react';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import '../styles/globals.scss';

import Header from '../components/Header';

config.autoAddCss = false;

export default function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <main className="flex min-h-screen flex-col">
          <Header />
          <Component {...pageProps} />
        </main>
      </Hydrate>
    </QueryClientProvider>
  );
};
