import React from 'react'
import bvideo from '../../Assets/Videos/bvideo.webm'

const Header = () => {
    return (
        <React.Fragment>
            <div className='w-full h-full shadow select-none'>
                <div className='w-full h-full'>
                    <video autoPlay loop muted className='w-full h-screen object-cover absolute'>
                        <source src={bvideo} type='video/mp4' />
                    </video>
                </div>
                <div className='bg-black bg-opacity-20 w-full h-screen relative grid grid-cols-3 '>
                    <div className='w-full h-full col-span-2'></div>
                    <div className='w-full h-full'></div>
                    <div className='w-full h-full col-span-3'>
                        <div className='text-center mt-10'>
                            <p className='text-5xl text-gray-300'>
                                <p className='md:inline'>Hi,</p> i'm Khaled KHAZEM
                            </p>
                            <p className='text-2xl mt-4 text-gray-200'>
                                <p className='xl:inline'>
                                    I'm a <span className='text-yellow-500 text-3xl'>web developer</span> from Algeria.{' '}
                                </p>
                                I can help you build your next
                                <span className='text-yellow-500'> Business App.</span>
                            </p>
                            <div className='mt-10'>
                                <button className='shadow inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-yellow-500 rounded shadow ripple hover:shadow-lg hover:bg-yellow-600 focus:outline-none'>
                                    Hire me now
                                </button>
                                <p className='text-gray-300 text-2xl inline mx-10'>or</p>
                                <button className='shadow inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-yellow-500 uppercase transition bg-transparent border-2 border-yellow-500 rounded ripple hover:bg-yellow-100 focus:outline-none'>
                                    Contact me
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-full col-span-3'></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header
