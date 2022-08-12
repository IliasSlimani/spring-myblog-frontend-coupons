import '../styles/globals.css'

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('../mocks')
  
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
