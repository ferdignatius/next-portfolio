import React from 'react'
import { motion, useScroll } from 'framer-motion'



export default function LiIcon({refrence}) {
    const {scrollYProgress} = useScroll(
        {
            target: refrence,
            offset: ["center end", "center center"]
        }
    )
  
    return (
    <figure className='absolute left-0 sm:-left-4 stroke-dark dark:stroke-light'>
        <svg className='-rotate-90 -translate-x-[5px] sm:w-[60px]' width={75} height={75} viewBox='0 0 100 100'>
            <circle cx='75' cy='50' r='20' className='stroke-dark/75 stroke-2 dark:stroke-light/75 fill-none'/>
            <motion.circle cx='75' cy='50' r='20' className='stroke-[5px] fill-light dark:fill-dark'
            style={{
                pathLength: scrollYProgress
            }}
            />
            <circle cx='75' cy='50' r='10' className='animate-pulse stroke-1 fill-primary'/>
        </svg>
    </figure>
  )
}
