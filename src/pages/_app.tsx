import NavBar from '@ferdignatius/components/home/NavBar.js'
import Nav from '@ferdignatius/components/home/nav'
import '@ferdignatius/styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import Footer from '@ferdignatius/components/footer'
import { useState } from 'react'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-mont'
})



export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  
  return (
    <>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
      <main className={`${montserrat.variable} font-sans bg-light w-full min-h-screen`}>
      <NavBar />
      <AnimatePresence mode='wait'>
      <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
      <Footer />
      </main>
      </>
  
  )
}
