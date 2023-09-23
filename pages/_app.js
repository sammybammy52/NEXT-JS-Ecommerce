
import Router from 'next/router';
import { Layout } from '../components'
import '../styles/globals.css'
import { StateContext } from '../context/StateContext';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from "next-auth/react";
import LoadingScreen from '../components/loadingScreen';
import NProgress from 'nprogress'; //nprogress module
import '../styles/Nprogress.css'





function MyApp({ Component, pageProps: { session, ...pageProps }}) {

  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  }); 
  Router.events.on('routeChangeComplete', () => NProgress.done()); 
  Router.events.on('routeChangeError', () => NProgress.done());

  return (
    <>
      <SessionProvider session={session}>
      <StateContext>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </SessionProvider>
    </>
    
  )
}

export default MyApp
