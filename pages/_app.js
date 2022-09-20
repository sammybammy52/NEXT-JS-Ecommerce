import { useState, useEffect } from 'react';
import Router from 'next/router';
import { Layout } from '../components'
import '../styles/globals.css'
import { StateContext } from '../context/StateContext';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from "next-auth/react"
import LoadingScreen from '../components/loadingScreen';





function MyApp({ Component, pageProps: { session, ...pageProps }}) {

  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    console.log('route is changing');
    setLoading(true)
  })
  Router.events.on("routeChangeComplete", (url) => {
    console.log('route change complete');
    setLoading(false);
  })

  return (
    <>
      { loading ? <LoadingScreen/> :
      
      <SessionProvider session={session}>
      <StateContext>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </SessionProvider>
      }

    </>
    
  )
}

export default MyApp
