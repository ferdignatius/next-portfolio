import React from 'react'
import Head from 'next/head'
import AnimatedText from '@ferdignatius/components/AnimatedText'
import Layout from '@ferdignatius/components/Layout'
import Skills from '@ferdignatius/components/about/Skills'
import Footer from '@ferdignatius/components/footer'
import Experience from '@ferdignatius/components/about/Experience'
import Education from '@ferdignatius/components/about/Education'
import TransitionEffect from '@ferdignatius/components/TransitionEffect'

export default function About() {
  return (
    <>
    <Head>
        <title>Ferdinand | About Me</title>
        <meta name="description" content="" />
    </Head>
    <TransitionEffect/>
    <main className='w-full min-h-screen text-dark flex items-center justify-center'>
        <Layout className=''>
        <AnimatedText text={'Someone Who Love The Internet'} className='text-center text-7xl lg:text-6xl md:text-5xl lg:mt-32 drop-shadow-md'></AnimatedText>
          <Skills />   
          <Experience />
          <Education />
        </Layout>
    </main>
    </>
  )
}
