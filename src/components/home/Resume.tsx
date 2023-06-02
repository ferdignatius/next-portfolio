import React from 'react'
import Link from 'next/link'
import { BsFiletypePdf } from 'react-icons/bs'

export default function Resume() {
  return (
    <div className="flex items-center self-start lg:self-center">
              <Link href="" target='_blank' className='mr-5 bg-dark text-light dark:bg-light dark:text-dark py-2 px-4 font-medium rounded-md  border hover:drop-shadow-sm border-dark dark:border-light duration-300 group hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light lg:text-sm'>Download CV<BsFiletypePdf className='inline ml-1 text-xl lg:text-lg text-light  dark:text-dark group-hover:text-dark dark:group-hover:text-light duration-300'/></Link>
              <Link href="" className='relative group font-medium lg:text-sm'>Contact!
              <span className={`h-[2px] w-0 absolute bg-dark dark:bg-light left-0 -bottom-0.5 transition-[width] ease-in duration-300 group-hover:w-full`}>
              </span>
              </Link>
            </div>
  )
}
