"use client";

import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';
import { ApolloProvider } from '@apollo/client';
import client from '../../apollo-client';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    </ReduxProvider>
  );
}

