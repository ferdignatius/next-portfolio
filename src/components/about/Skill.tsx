import React from 'react'
import {motion} from 'framer-motion'

export default function Skill({text, x, y}) {
  return (
    <div>
        <motion.div className='flex items-center justify-center rounded-full bg-dark text-light p-3 font-semibold shadow-md shadow-gray-500 text-base absolute dark:bg-light dark:text-dark' 
            whileHover={{scale:1.10}}
            initial={{x:0,y:0}}
            whileInView={{x:x,y:y}}
            transition={{duration:1}}
            >
                {text}
            </motion.div>
    </div>
  )
}
