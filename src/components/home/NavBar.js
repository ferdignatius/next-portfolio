import React, { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import {useRouter } from 'next/router'
import { FaInstagram, FaFacebookSquare, FaLinkedin, FaGithub, FaSun, FaMoon } from "react-icons/fa";
import useThemeSwitcher from '../hooks/useThemeSwitcher';
import { motion } from 'framer-motion';
import {MdMenu, MdClose} from 'react-icons/md'

const CustomLink = ({href, title, className="",}) => {
  return (
  <Link href={href} className={`${className} relative group`}>
    {title}
  <span className={`h-[1.5px] absolute bg-dark dark:bg-light left-0 -bottom-0.5 transition-[width] ease-in duration-300 group-hover:w-full ${useRouter().asPath === href ? 'w-full' : 'w-0'}`}></span>

  </Link>
  )
}

const CustomMobileLink = ({href, title, className="", toggle}) => {
  const router = useRouter();
  const handleClick = () => {
    toggle()
    router.push(href)

  }
  return(
      <Link href={href} className={`${className} text-dark relative group`} onClick={handleClick}>
  {title}
  <span className={`h-[1.5px] absolute bg-dark dark:bg-light left-0 -bottom-0.5 transition-[width] ease-in duration-300 group-hover:w-full ${useRouter().asPath === href ? 'w-full' : 'w-0'}`}></span>
</Link>
)
} 



export default function NavBar() {
  
  // const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='w-full px-32 lg:px-24 md:px-16 sm:px-12 py-8 flex justify-between items-center font-medium bg-light dark:bg-dark dark:text-light relative '>
      <div className=' items-center transition-all duration-300 ease-out hidden lg:flex' onClick={handleClick}>
        {
          isOpen ?
          <MdClose className='text-3xl transition-all duration-300 ease-out'/> :
        <MdMenu className='text-3xl '/> 
      }
      </div>

    <div className='w-full flex justify-between items-center lg:hidden'>
    <ul className='text-base'>
        <CustomLink href='/' title='Home' className='mr-6' />
        <CustomLink href='/about' title='About' className='mr-6' />
        <CustomLink href='/works' title='Works' className='mr-6' />
    
    </ul>
    <ul className='flex text-2xl'>
      <Link href="https://www.instagram.com/ferdignatius/" target='_blank' className='p-1 mr-4'><FaInstagram className='social-icon text-[#FD1D1D] duration-300 hover:-translate-y-1'/></Link>
      <Link href="https://www.facebook.com/ferdi.ignatius" className='p-1 mr-4' target='_blank'><FaFacebookSquare className='social-icon text-[#1877f2] duration-300 hover:-translate-y-1'/></Link>
      <Link href="https://www.linkedin.com/in/ferdinand-ignatius-surya-679b41217/" className='p-1 mr-4' target='_blank'><FaLinkedin className='social-icon text-[#0e76a8] duration-300 hover:-translate-y-1'/></Link>
      <Link href="https://github.com/Ferdignatius/" className='p-1 mr-4' target='_blank'><FaGithub className='social-icon text-[#171515] dark:text-light duration-300 hover:-translate-y-1'/></Link>
      {/* <motion.button
      onClick={()=>{
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
      className='ml-3 flex items-center justify-center rounded-full p-2 bg-dark dark:bg-light'
      whileHover={{
        scale:1.1
      }}
      >
        {
          mode === "dark" ? 
          <FaSun className='fill-dark'/> : 
          <FaMoon className='fill-light'/>
        }
      </motion.button> */}
    </ul>
    </div>

      {
        isOpen ?
        <div className='min-w-[80vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-light/70 shadow-2xl rounded-xl backdrop-blur-xl py-32'>
    <ul className='text-base flex items-center flex-col justify-center'>
        <CustomMobileLink href='/' title='Home' className='my-2' toggle={handleClick}/>
        <CustomMobileLink href='/about' title='About' className='my-2' toggle={handleClick}/>
        <CustomMobileLink href='/works' title='Works' className='my-2 mb-5' toggle={handleClick}/>
    
    </ul>
    <ul className='flex text-2xl'>
      <Link href="https://www.instagram.com/ferdignatius/" target='_blank' className='p-1 mx-2'><FaInstagram className='social-icon text-[#FD1D1D] duration-300 hover:-translate-y-1'/></Link>
      <Link href="https://www.facebook.com/ferdi.ignatius" className='p-1 mx-2' target='_blank'><FaFacebookSquare className='social-icon text-[#1877f2] duration-300 hover:-translate-y-1'/></Link>
      <Link href="https://www.linkedin.com/in/ferdinand-ignatius-surya-679b41217/" className='p-1 mx-2' target='_blank'><FaLinkedin className='social-icon text-[#0e76a8] duration-300 hover:-translate-y-1'/></Link>
      <Link href="https://github.com/Ferdignatius/" className='p-1 mx-2' target='_blank'><FaGithub className='social-icon text-[#171515] dark:text-light duration-300 hover:-translate-y-1'/></Link>
      {/* <motion.button
      onClick={()=>{
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
      className='ml-3 flex items-center justify-center rounded-full p-2 bg-dark dark:bg-light'
      whileHover={{
        scale:1.1
      }}
      >
        {
          mode === "dark" ? 
          <FaSun className='fill-dark'/> : 
          <FaMoon className='fill-light'/>
        }
      </motion.button> */}
    </ul>
    </div>


        : null
      }
    
    <div className="absolute top-3 left-1/2 lg:left-[75%]"><Link href={'/'}><Logo /></Link></div>
    </nav>

  )
}
