import axios from 'axios';
import React from 'react';
import '../styles/globals.css'
import { AuthProvider } from './context/AuthContext';



if (process.env.NODE_ENV === 'development') {
  const { worker } = require('../mocks')
  
}


function MyApp({ Component, pageProps }) {

  return (
    <AuthProvider>

    
<Component {...pageProps} />
</AuthProvider>
    

  )
}

export default MyApp