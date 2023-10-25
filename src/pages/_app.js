import { useState } from 'react';
import Link from 'next/link';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import '../styles/globals.scss';

config.autoAddCss = false;

export default function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <main className="flex min-h-screen flex-col">
          <div className="flex items-center border-b-[1px] border-gray-light px-10 py-5">
            <Link href='/'>
              <span className="text-3xl font-bold text-pink">Hotels&Co.</span>
            </Link>
          </div>
          <Component {...pageProps} />
        </main>
      </Hydrate>
    </QueryClientProvider>
  );
};
