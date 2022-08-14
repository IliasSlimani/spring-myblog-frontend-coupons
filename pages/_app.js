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


if (process.env.NODE_ENV === 'development') {
  const { worker } = require('../mocks')
  
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {

  return (
    <QueryClientProvider client={queryClient}>
    <AuthProvider>

    
<Layout>
      <Component {...pageProps} />
    </Layout>
</AuthProvider>
    </QueryClientProvider>

  )
}

export default MyApp