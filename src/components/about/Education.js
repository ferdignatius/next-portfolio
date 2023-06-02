import React, { useRef } from 'react'
import AnimatedText2 from '../AnimatedText2'
import Link from 'next/link'
import { motion, useScroll, useSpring } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null)

    return (<li ref={ref} className='my-8 first:mt-0 last:mb-0 w-3/5 sm:w-full lg:w-4/5 mx-auto flex flex-col items-center justify-between dark:text-light'>
        <LiIcon refrence={ref} />
        <motion.div
        initial={{y:50, opacity:0.5}}
        whileInView={{y:0,opacity:1}}
        transition={{
            duration: 0.5,
            type:'spring'
        }}
        >
            <h3 className='capitalize font-bold text-2xl md:text-xl sm:text-lg'>{position}&nbsp;<Link href={companyLink} target='_blank' className='text-primary hover:text-primary/70 dark:text-indigo-500 
            dark:hover:text-indigo-300 hover:underline underline-offset-2 duration-300'>@{company}</Link></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 md:text-sm'>{time} | {address}</span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>)
}

export default function Education() {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <>
   <div className='my-64'>
   <AnimatedText2 text={'Education'} className='font-bold text-center mb-32 text-7xl w-full lg:mb-20 lg:text-6xl md:text-5xl'></AnimatedText2>

   <div ref={ref} className='w-4/5 md:w-full mx-auto relative'>
    
    <motion.div 
    style={{scaleY: scrollYProgress}}
    className='absolute left-8 sm:left-2 top-0 w-[5px] h-full bg-dark dark:bg-light origin-top sm:w-[3px] md:w-[4px]' />

    <ul className='w-full flex flex-col items-start justify-between ml-4 md:ml-1 sm:pl-8'> 

<Details  
position={'Software Engineer'} company={'Google'}
companyLink={"www.google.com"} 
time={'2022-present'}
address={"Indonesia"}
work={"Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."}
/>

<Details  
position={'Software Engineer'} company={'Google'}
companyLink={"www.google.com"} 
time={'2022-present'}
address={"Indonesia"}
work={"Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."}
/>
<Details  
position={'Software Engineer'} company={'Google'}
companyLink={"www.google.com"} 
time={'2022-present'}
address={"Indonesia"}
work={"Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."}
/>
</ul>
   </div>
   </div>
   </>
  )
}
