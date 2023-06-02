import Head from "next/head"
import AnimatedText from "@ferdignatius/components/AnimatedText"
import Layout from "@ferdignatius/components/Layout"
import TopWork from "@ferdignatius/components/works/TopWork"
import SecWork from "@ferdignatius/components/works/SecWork"
import Project1 from '../../public/images/projects/fashion-studio-website.jpg'
import Footer from "@ferdignatius/components/footer"
import TransitionEffect from "@ferdignatius/components/TransitionEffect"


export default function Works() {
  return (
    <>
    <Head>
        <title>Ferdinand | Works</title>
        <meta name="description" content="Ferdinand Projects and Works" />
    </Head>
    <TransitionEffect />
    <main className="w-full min-h-screen text-dark flex items-center justify-center">
        <Layout>
        <AnimatedText text={'Imagination Trumps Knowledge!'} className="text-center mb-16 lg:text-6xl md:text-5xl lg:mt-32 drop-shadow-md text-7xl "/>
        <div className="w-full grid grid-cols-12 gap-24 mt-60 xl:gap-x-8 md:gap-y-24 sm:gap-3">
            <div className="col-span-12">
                <TopWork 
                githubLink={'/'}
                desc={'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.'}
                image={Project1}
                link={'/'}
                title={'Asthetic Fashion Website'}
                type={'E-Commerce Website'}
                />
            </div>
            <div className="col-span-6 md:col-span-12">
              <SecWork 
              githubLink={'/'}
              image={Project1}
              link={'/'}
              title={'Asthetic Fashion Website'}
              type={'E-Commerce Website'}
              />
            </div>
            <div className="col-span-6 md:col-span-12">
            <SecWork 
              githubLink={'/'}
              image={Project1}
              link={'/'}
              title={'Asthetic Fashion Website'}
              type={'E-Commerce Website'}
              />
            </div>
        </div>
        </Layout>
    </main>
    </>
  )
}
