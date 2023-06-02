import { useEffect, useState} from 'react'
import Link from 'next/link'
import { IoMenu, IoClose } from "react-icons/io5";
import { FaInstagram, FaFacebookSquare, FaLinkedin, FaGithub } from "react-icons/fa";



export default function Nav() {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(()=> {
        const changeColor = () =>{
            if(window.scrollY >= 90) {
                setColor('#f4f4f5')
                setTextColor('#1f1f1f')
            } else {
                setColor('transparent')
                setTextColor('dark')
            }
        };
        window.addEventListener('scroll', changeColor)
    })



  return (
    <>
    <nav style={{backgroundColor: `${color}`}} className=' fixed left-0 top-0 w-full z-20 ease-in duration-500 h-1/6'>
        <div className="w-10/12 m-auto">
        <div className=' max-w-7xl m-auto flex justify-between items-center text-dark font-medium'>
            <ul style={{color: `${textColor}`}} className='hidden sm:flex text-dark'>            
                <li className='p-4 hover:text-zinc-300 duration-500 text-sm'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-4 hover:text-zinc-300 duration-500 text-sm'>
                    <Link href='/about'>About</Link>
                </li>
                <li className='p-4 hover:text-zinc-300 duration-500 text-sm'>
                    <Link href='/work'>Works</Link>
                </li>
            </ul>
            <div className="w-full flex justify-end">
              <Link href="https://www.instagram.com/ferdignatius/" target='_blank' className='p-1 m-2'><FaInstagram className='social-icon hover:text-rose-500 duration-500 text-md'/></Link>
              <Link href="https://www.facebook.com/ferdi.ignatius" className='p-1 m-2' target='_blank'><FaFacebookSquare className='social-icon hover:text-blue-500 duration-500 text-md'/></Link>
              <Link href="" className='p-1 m-2' target='_blank'><FaLinkedin className='social-icon hover:text-sky-500 duration-500 text-md'/></Link>
              <Link href="https://github.com/Ferdignatius/" className='p-1 m-2' target='_blank'><FaGithub className='social-icon hover:text-zinc-500 duration-500 text-md'/></Link>
            </div>

            {/* mobile menu */}
            {/* mobile button */}
            <div onClick={handleNav} className="block sm:hidden z-50" style={{color: `${textColor}`}}>
                {nav ? <IoClose style={{color:"white"}}size={30} />: <IoMenu size={30}/> }
            </div>
            <div className={nav ? 'sm:hidden absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' : 'sm:hidden absolute top-0 bottom-0 left-[-100%] right-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
                {/* menu icon */}
                <ul className=''>            
                <li className='p-4 hover:text-gray-500 duration-500 text-3xl text-white'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-4 hover:text-gray-500 duration-500 text-3xl text-white'>
                    <Link href='/#about'>About</Link>
                </li>
                <li className='p-4 hover:text-gray-500 duration-500 text-3xl text-white'>
                    <Link href='/#work'>Works</Link>
                </li>
            </ul>
            </div>
        </div>
        </div>
    </nav>
    </>
  )
}
