import React from 'react'
import {motion} from 'framer-motion'

const quote = {
    initial : {
        opacity : 1,
    },
    animate : {
        opacity : 1,
        transition : {
            delay : 0.5,
            staggerChildren : 0.05, 
        }
    }
}

const singleWord = {
    initial : {
        opacity : 0,
        y: 50
    },
    animate : {
        opacity : 1,
        y: 0,
        transition : {
            duration : 0.8,
        }
    }
}


export default function AnimatedText({text, className=""}) {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center overflow-hidden'>
        <motion.h1 className={`inline-block w-full text-dark dark:text-light font-bold text-5xl lg:text-4xl capitalize ${className}`}
        variants={quote}
        initial='initial'
        whileInView='animate'
        >
            {
                text.split(" ").map((word,index) =>
                    <motion.span key={word+'-'+index} className='inline-block'
                    variants={singleWord}
                    >
                        {word}&nbsp;
                    </motion.span>
                )
            }
        </motion.h1>
     </div>
  )
}
