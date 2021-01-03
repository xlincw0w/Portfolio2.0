import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'

const Footer = () => {
    return (
        <React.Fragment>
            <div className='bg-gradient-to-r from-gray-200 to-red-100 h-96 shadow-lg select-none shadow'>
                <div className='grid grid-cols-1 h-full'>
                    <div className='border-t-4 borderanimate rounded'>
                        <div className='flex'>
                            <p className='text-6xl mx-auto pt-10 textanimate'>❖</p>
                        </div>
                    </div>
                    <div className='h-full'></div>
                    <div className='h-full'>
                        <div className='w-full'>
                            <div className='w-max mx-auto'>
                                <div className='mb-2 sm:mb-10'>
                                    <small className='hidden sm:block text-xl text-center'>
                                        © 2020 <span className='textanimate'>xlincw0w</span>
                                        <p className='inline'>. All Rights Reserved</p>
                                    </small>
                                </div>
                                <div className='text-center'>
                                    <a href='https://github.com/xlincw0w' target='_blank' className='inline-block mx-2 sm:mx-8 hover:text-red-400 cursor-pointer'>
                                        <AiOutlineGithub size={48} className='mx-auto' />
                                        <p>
                                            <span className='text-red-400'>Git</span>hub
                                        </p>
                                    </a>
                                    <a href='https://www.facebook.com/xlincw0w/' target='_blank' className='inline-block mx-2 sm:mx-8 hover:text-red-400 cursor-pointer'>
                                        <AiOutlineFacebook size={48} className='mx-auto' />
                                        <p>
                                            <span className='text-red-400'>Face</span>book
                                        </p>
                                    </a>
                                    <a href='https://www.instagram.com/xlincw0w/' target='_blank' className='inline-block mx-2 sm:mx-8 hover:text-red-400 cursor-pointer'>
                                        <AiOutlineInstagram size={48} className='mx-auto' />
                                        <p>
                                            <span className='text-red-400'>Insta</span>gram
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer
