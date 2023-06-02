import React from 'react'
import AnimatedText2 from '../AnimatedText2'
import {motion} from 'framer-motion'
import Skill from './Skill'
import Image from 'next/image'
import WebImg from '../../../public/images/skills/web.jpg'
import DataImg from '../../../public/images/skills/data.jpg'

const listSkill = () => {
  return 
}

export default function Skills() {
  return (
    <>
        <AnimatedText2 text={'Skills'} className='font-bold text-center mt-64 text-7xl lg:text-6xl md:text-5xl w-full pb-10'></AnimatedText2>
        {/* <div className='w-full h-screen relative flex items-center justify-center bg-circularLight lg:bg-circularLightLg md:bg-circularLightMd sm:bg-circularLightSm dark:bg-circularDark rounded-full'>
            
            <motion.div className='flex items-center justify-center rounded-full bg-dark text-light dark:bg-light dark:text-dark p-6 font-semibold shadow-xl shadow-gray-500 text-xl' 
            whileHover={{scale:1.10}}>
                WEB
            </motion.div>
              <div className='absolute -translate-x-10 -translate-y-6'>
              <Skill text={'HTML'} x='-3vw' y='-9vw'/>
              <Skill text={'CSS'} x='-12vw' y='4vw'/>
              <Skill text={'Javascript'} x='10vw' y='5vw'/>
            </div>
        </div> */}
        <ul className="w-full grid gap-1">
          <li className="w-full h-40 overflow-hidden group">
            <motion.div className="bg-dark/80 hover:bg-dark/90 duration-300 h-40 w-full z-[1] absolute flex items-center justify-center cursor-pointer left-0 "
            >
              <h2 className='text-light font-semibold text-6xl lg:text-5xl md:text-4xl group-hover:'>Website</h2>
            </motion.div>
            <div className='absolute h-40 w-full left-0'>
              <Image src={WebImg} alt='' className='w-full h-full object-cover'/>
            </div>
            <div className='bg-dark w-full h-full absolute left-0 -z-10'>
              
            </div>
          </li>
          
          <li className="w-full h-40 overflow-hidden">
            <div className="bg-dark/80 hover:bg-dark/90 duration-300 h-40 w-full z-[1] absolute flex items-center justify-center cursor-pointer left-0 ">
              <h2 className='text-light font-semibold text-6xl lg:text-5xl md:text-4xl'>Data</h2>
            </div>
            <div className='absolute h-40 w-full left-0'>
              <Image src={DataImg} alt='' className='w-full h-full object-cover'/>
            </div>
          </li>
        </ul>
    </>
  )
}
