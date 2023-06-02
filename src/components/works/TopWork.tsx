import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FaGithub} from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function TopWork({type, link, githubLink, image, title, desc}) {
  return (
    <>
    <motion.article className='w-full border-2  border-dark flex p-14 md:p-3 rounded-3xl bg-light  items-center relative shadow-xl shadow-dark dark:shadow-light dark:border-light dark:bg-dark lg:flex-col lg:p-8 '
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5}}
    >
        
        <div className='w-1/2 lg:w-full overflow-hidden rounded-3xl'>
        <Link href={link} target='_blank' >
            <Image src={image} alt={title} className='rounded-3xl w-full h-auto cursor-pointer hover:scale-110 duration-300'/>
        </Link>
        </div>
        <div className='flex flex-col justify-between items-start w-1/2 lg:w-full pl-6 lg:p-0'>
            <span className='text-xl text-primary/75 font-semibold md:text-base'>{type}</span>
            <Link href={link} target='_blank' >
                <h2 className='text-4xl md:text-2xl text-dark font-bold hover:underline my-2'>{title}</h2>
            </Link>
            <p className='font-medium text-base md:text-sm'>{desc}</p>

            <div className='flex text-base items-center mt-5'>
                <Link href={githubLink} className='text-4xl md:text-3xl hover:text-dark/75 duration-300'><FaGithub/></Link>
                <Link href={link} target='_blank' className='md:text-sm ml-5 bg-dark text-light dark:bg-light dark:text-dark py-2 px-4 font-semibold rounded-md  border hover:drop-shadow-sm border-dark dark:border-light duration-300 group hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light'>Visit Site</Link>
            </div>
        </div>
    </motion.article>
    </>
  )
}
