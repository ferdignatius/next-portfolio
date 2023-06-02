import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'

const MotionLink = motion(Link)

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href='' className='w-12 h-12 bg-dark text-light flex items-center justify-center text-2xl font-bold hover:scale-110 duration-300 dark:bg-light dark:text-dark '
        whileHover={{
          backgroundColor : ["#A125DA","#DA4725", "#5EDA25", "#25B8DA","#A2AE51","#51AE8B","#5D51AE","#AE5174"],
            // borderRadius:["0%",'25%','50%','75%','100%'],
            transition : {
                duration : 2,
                repeat : Infinity
            }
        }}
        >FI</MotionLink>
    </div>
  )
}

export default Logo