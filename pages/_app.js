import axios from 'axios';
import React from 'react';
import '../styles/globals.css'
import Layout from './components/Layout';
import { AuthProvider } from './context/AuthContext';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Auth from './components/Auth';
import NextNProgress from 'nextjs-progressbar';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('../mocks')
  
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {

  return (
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
<Auth>


    
<Layout>

      <Component {...pageProps} />
    </Layout>

    </Auth>
</AuthProvider>
    </QueryClientProvider>

  )
}

export default MyApp