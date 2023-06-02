import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Contact from './Contact'
import { useState } from 'react'


const MotionLink = motion(Link)

export default function HireMe() {
  const [showModal, setShowModal] = useState(false)

  const handleOnCLose = (e) => {
    // if(e.target.id === 'container') {onClose()}
}
  const handleClickHire = () => {
    setShowModal(!showModal)
  }

  return ( 
    <>
    <motion.div 
    onClick={()=> {
      setShowModal(true)
    }} 
    className="h-20 w-20 fixed md:absolute z-10 bottom-1/4 md:hidden right-24 translate-y-full bg-dark text-light dark:bg-light dark:text-dark rounded-full text-xs duration-300 translate-x-1/2 border-2 hover:scale-110 animate-pulse" 
    whileHover={{
      // backgroundColor : ["#A125DA","#DA4725", "#5EDA25", "#25B8DA","#A2AE51","#51AE8B","#5D51AE","#AE5174"],
      transition : {
          duration : 1,
          repeat : Infinity
      }
  }}
  >
        <h5 className="block text-center pt-7 p-1 transition-all font-bold">HIRE ME</h5>
        {/* <Contact visible={showModal} onClose={hanldeOnClose}/> */}
    </motion.div>

    <div>
      {/* <Contact /> */}
    </div>
    </>
  )
}

{/* <div className='flex items-center justify-center mt-2'>
        <MotionLink href='' className='w-12 h-12 bg-dark text-light flex items-center justify-center  text-2xl font-bold hover:scale-110 duration-300'
        whileHover={{
            backgroundColor : ["#A125DA","#DA4725", "#5EDA25", "#25B8DA"],
            borderRadius:["0%",'25%','50%','75%','100%'],
            transition : {
                duration : 1,
                repeat : Infinity
            }
        }}
        >FI</MotionLink>
    </div> */}