import React from 'react'
import {IoClose, IoSend, IoPerson, IoCall, IoLogoLinkedin} from 'react-icons/io5'
import {FiAtSign} from 'react-icons/fi'

export default function Contact() {
    // const handleOnCLose = (e) => {
    //     if(e.target.id === 'container') {onClose()}
    // }

    // if(!visible) {
    //     return null
    // }

  return (
    <>
    <div className='fixed w-full z-10 inset-0 bg-dark bg-opacity-20 backdrop-blur-md flex justify-center items-center'
    >
        <div className='min-w-[80vw] h-[60%] flex justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-light/70 shadow-2xl rounded-xl backdrop-blur-xl'>
            {/* close button */}
            <button className='text-4xl absolute bg-light z-50 p-2 rounded-full -right-5 -top-5'><IoClose/></button>
            {/* content */}
            <div className='w-1/2 h-full rounded-l-xl bg-primary text-light p-12 hover:scale-y-110 duration-300 hover:rounded-xl'>
                {/* contact info */}
                <div className="flex justify-between">
                    <h2 className='text-center text-3xl font-bold p-5 w-full'>Contact Information</h2>
                </div>

                <div className='mt-6 flex flex-row text-sm font-medium items-center'>
                    <div className='text-4xl mr-3'>
                        <IoPerson />
                    </div>
                    <div>
                        <h2 className=''>Name :</h2>
                        <p>Ferdinand Ignatius Surya</p>
                    </div>
                </div>

                <div className='mt-6 flex flex-row text-sm font-medium items-center'>
                    <div className='text-4xl mr-3'>
                        <FiAtSign/>
                    </div>
                    <div>
                        <h2 className=''>Email :</h2>
                        <p>ferdignatius@gmail.com</p>
                    </div>
                </div>

                {/* <div className='mt-6 flex flex-row text-sm font-medium items-center '>
                    <div className='text-4xl mr-3'>
                        <IoLogoLinkedin/>
                    </div>
                    <div>
                        <h2 className=''>Linkedin :</h2>
                        <p>Ferdinand Ignatius Surya</p>
                    </div>
                </div> */}

            </div>
            <div className='w-1/2 flex flex-col justify-center items-center bg-dark/90 h-full rounded-r-xl'>
            
            <div className="flex">
                    <h2 className='text-center text-3xl font-bold p-5 w-full text-light'>Get In Touch!</h2>
                </div>
                {/* contact form */}
            <form action="" method="post" className='text-sm flex flex-col w-4/5'>
                <label htmlFor="" className='my-3'>
                    {/* <p className='pt-2 text-light'>Name</p> */}
                    <input type="text" placeholder='Name' className='px-4 py-2 rounded-xl focus:border-dark/20 w-full'/>
                </label>
                <label htmlFor="" className='my-3'>
                    {/* <p className='pt-2 text-light'>Email</p> */}
                    <input type="email" placeholder='Email' className='px-4 py-2 rounded-xl focus:border-dark/20 w-full'/>
                </label>
                <label htmlFor="" className='my-3'>
                    {/* <p className='pt-2 text-light'>Mesage</p> */}
                    <textarea name="" id="" placeholder='Mesage' className='px-4 py-2 rounded-xl focus:border-dark/20 w-full'></textarea>
                </label>
                    <button type="submit" className='px-4 py-2 bg-light text-dark hover:bg-dark hover:text-light rounded-xl flex hover:border-light border shadow-light w-1/3 justify-center items-center text-base'>Submit<IoSend className='ml-2 text-xl'/></button>
            </form>
            </div>
        </div>
    </div>
    </>
  )
}
