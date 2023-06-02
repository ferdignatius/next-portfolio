import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FaGithub} from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function SecWork({type, link, githubLink, image, title}) {
  return (
    <motion.article className='w-full border-2 border-dark p-7 md:p-3 rounded-3xl bg-light items-center relative shadow-xl shadow-dark flex flex-col dark:shadow-light dark:border-light dark:bg-dark'
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5}}
    >
        <Link href={link} target='_blank' className='overflow-hidden w-full rounded-3xl'>
            <Image src={image} alt={title} className='rounded-3xl w-full h-auto cursor-pointer hover:scale-110 duration-300 '/>
        </Link>

        <div className='flex flex-col justify-between items-start pt-6 w-full'>
            <span className='text-xl text-primary/75 font-semibold'>{type}</span>
            <Link href={link} target='_blank' >
                <h2 className='text-4xl md:text-2xl text-dark font-bold hover:underline my-2'>{title}</h2>
            </Link>
            <div className='flex items-center justify-between mt-5 w-full '>
                <Link href={link} target='_blank' className='underline-offset-2 text-dark/75 hover:text-dark text-xl md:text-lg hover:underline duration-300'>Visit Site</Link>
                <Link href={githubLink} target='_blank' className='ml-auto text-4xl md:text-3xl hover:text-zinc-700 duration-300'><FaGithub/></Link>
            </div>
        </div>
    </motion.article>
  )
}
