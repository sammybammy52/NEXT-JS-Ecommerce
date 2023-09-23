import React from 'react'
import Head from'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import BottomNav from './BottomNav';
const Layout = ({ children }) => {
  return (
    <div className="layout">
        <Head>
            <title>Seye ecommerce</title>
        </Head>
        <header>
            <Navbar/>
        </header>
        <main className='main-container'>
           { children }
        </main>
        <footer className='bottom-nav'>
            <BottomNav/>
        </footer>
    </div>
  )
}

export default Layout