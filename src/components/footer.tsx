import React from 'react'
import { FcLike } from 'react-icons/fc'
import Link from 'next/link'
import HireMe from './hireMe'
import Contact from './Contact'
import { useState } from 'react'

export default function Footer() {

  return (
    <>
    <HireMe/>
    <hr className='border-2 md:border border-dark dark:border-light'/>
    <div className="dark:bg-dark dark:text-light w-full flex justify-center p-5 font-medium md:text-sm">Made With <FcLike  className='mx-2 text-lg md:text-md'/> by<Link href='' className='ml-1 underline underline-offset-2 hover:text-primary dark:hover:text-indigo-300 duration-500 font-bold'>Ferdinand</Link></div>
    </>
  )
}
