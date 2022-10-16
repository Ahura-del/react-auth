import Head from 'next/head'
import React from 'react'
import Nav from './Nav'

function Layout({children}) {
  return (
    <div>
      <Head>
        <title>React Auth</title>
        <meta name="description" content="Simple authorization app with firebase and next js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Nav/>
        <main className='w-11/12 mx-auto'>
        {children}
        </main>
    </div>
  )
}

export default Layout