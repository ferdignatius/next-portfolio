import Image from 'next/image'
import Footer from '@ferdignatius/components/footer'
import Head from 'next/head'
import Layout from '@ferdignatius/components/Layout'
import profilePict from'../../public/images/profile/developer-pic-1.png'
import AnimatedText from '@ferdignatius/components/AnimatedText'
import Resume from '@ferdignatius/components/home/Resume'
import { motion } from 'framer-motion'
import TransitionEffect from '@ferdignatius/components/TransitionEffect'
import Contact from '@ferdignatius/components/Contact'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ferdinanad Portfolio</title>
      <meta name="description" content="Ferdinand Ignatius Surya Portfolio generated by create next app" />
    </Head>
    <TransitionEffect/>
    <main className='w-full min-h-screen text-dark dark:text-light flex items-center'>
      {/* <Contact /> */}
      <Layout className='pt-0'>
        <div className="flex md:flex-col  items-center justify-between w-full">
          <div className='w-1/2 md:w-full lg:hidden md:flex'>
            <Image src={profilePict} alt='' className='w-full h-auto'/>
          </div>
          <div className="w-1/2 lg:w-full md:my-10 flex flex-col items-center self-center lg:text-center">
            <AnimatedText text={'Turning Vision Into Reality With Code And Design.'} className='lg:text-5xl md:text-4xl '></AnimatedText>
            <motion.p className='my-4 text-base font-medium md:text-sm'
            initial={{
              y:50,
              opacity:0
            }}
            animate={{
              y:0,
              opacity:1

            }}
            transition={{
              duration:0.7
            }}
            >As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.</motion.p>
            <Resume />
          </div>
        </div>
      </Layout>
    </main>
    </>
  )
}
