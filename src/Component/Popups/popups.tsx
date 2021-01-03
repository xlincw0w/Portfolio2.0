import React from 'react'
import { FaPython } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { DiGit } from 'react-icons/di'
import { FaDocker } from 'react-icons/fa'
import { SiReact } from 'react-icons/si'
import { SiKeras } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { GiArtificialIntelligence } from 'react-icons/gi'
import { FaNetworkWired } from 'react-icons/fa'

const Popups: React.FunctionComponent<{}> = () => {
    return (
        <div className='w-full h-full select-none bg-popupsBack'>
            <div className='mx-auto py-40'>
                <div data-aos='zoom-out-left'>
                    <div className='w-full lg:w-1/2 h-96 ml-auto shadow bg-gray-200 bg-opacity-80 rounded-md xl:mr-14'>
                        <div className='text-center'>
                            <div className='border-b-2 border-yellow-500 pb-4 mx-20 xl:mx-40'>
                                <p className='text-yellow-500 text-base lg:text-xl pt-4'>Skills &amp; technologies</p>
                            </div>
                        </div>
                        <div className='w-full h-5/6 xl:pb-5 . pb-10'>
                            <div className='grid grid-cols-3 gap-1 h-full px-5 pt-10'>
                                <div className='shadow w-full bg-yellow-600 bg-opacity-80 border-2 border-yellow-500 border-opacity-50 rounded-md'>
                                    <div className='flex h-full'>
                                        <div className='m-auto'>
                                            <FaPython size={40} className='inline pr-2 text-gray-100' />
                                            <p className='text-gray-100 text-sm xl:text-base 2xl:text-xl hidden sm:inline pl-2'>Python</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='shadow w-full bg-yellow-600 bg-opacity-80 border-2 border-yellow-500 border-opacity-50 rounded-md'>
                                    <div className='flex h-full'>
                                        <div className='m-auto'>
                                            <IoLogoJavascript size={40} className='inline pr-2 text-gray-100' />
                                            <p className='text-gray-100 text-sm xl:text-base 2xl:text-xl hidden sm:inline pl-2'>Javascript</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='shadow w-full bg-gray-50 border-2 border-yellow-500 border-opacity-50 rounded-md'>
                                    <div className='flex h-full'>
                                        <div className='m-auto'>
                                            <DiGit size={40} className='inline pr-2' />
                                            <p className='text-gray-600 text-sm xl:text-base 2xl:text-xl hidden sm:inline pl-2'>Git &amp; Github</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='shadow w-full bg-gray-50 border-2 border-yellow-500 border-opacity-50 rounded-md'>
                                    <div className='flex h-full'>
                                        <div className='m-auto'>
                                            <SiKeras size={40} className='inline pr-2' />
                                            <p className='text-gray-600 text-sm xl:text-base 2xl:text-xl hidden sm:inline pl-2'>Keras</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='shadow w-full bg-gray-50 border-2 border-yellow-500 border-opacity-50 rounded-md'>
                                    <div className='flex h-full'>
                                        <div className='m-auto'>
                                            <SiReact size={40} className='inline pr-2' />
                                            <p className='text-gray-600 text-sm xl:text-base 2xl:text-xl hidden sm:inline pl-2'>React</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='shadow w-full bg-gray-50 border-2 border-yellow-500 border-opacity-50 rounded-md'>
                                    <div className='flex h-full'>
                                        <div className='m-auto'>
                                            <FaNetworkWired size={40} className='inline pr-2' />
                                            <p className='text-gray-600 text-sm xl:text-base 2xl:text-xl hidden sm:inline pl-2'>Networking</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='shadow w-full bg-gray-50 border-2 border-yellow-500 border-opacity-50 rounded-md'>
                                    <div className='flex h-full'>
                                        <div className='m-auto'>
                                            <GiArtificialIntelligence size={40} className='inline pr-2' />
                                            <p className='text-gray-600 text-sm xl:text-base 2xl:text-xl hidden sm:inline pl-2'>Data mining</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='shadow w-full bg-gray-50 border-2 border-yellow-500 border-opacity-50 rounded-md'>
                                    <div className='flex h-full'>
                                        <div className='m-auto'>
                                            <FaNodeJs size={40} className='inline pr-2' />
                                            <p className='text-gray-600 text-sm xl:text-base 2xl:text-xl hidden sm:inline pl-2'>Node</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='shadow w-full bg-gray-50 border-2 border-yellow-500 border-opacity-50 rounded-md'>
                                    <div className='flex h-full'>
                                        <div className='m-auto'>
                                            <FaDocker size={40} className='inline pr-2' />
                                            <p className='text-gray-600 text-sm xl:text-base 2xl:text-xl hidden sm:inline pl-2'>Docker</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos='zoom-out-right'>
                    <div className='my-10 sm:my-40 w-full lg:w-1/2 h-96 mr-auto shadow bg-gray-200 bg-opacity-80 rounded-md xl:ml-14'>
                        <div className='text-center'>
                            <div className='border-b-2 border-yellow-500 pb-4 mx-10 sm:mx-40'>
                                <p className='text-yellow-500 text-xl pt-4'>Educational path</p>
                            </div>
                            <div>
                                <div className='my-5'>
                                    <p className='text-gray-600 text-base'>
                                        <span className='text-yellow-500'>Master 1</span> Information system engineering
                                    </p>
                                    <p className='text-gray-400 text-xs'> Mouloud Mammeri University ended in 2020</p>
                                </div>
                                <div className='my-5'>
                                    <p className='text-gray-600 text-base'>
                                        <span className='text-yellow-500'>3nd year</span> Computer science
                                    </p>
                                    <p className='text-gray-400 text-xs'> Mouloud Mammeri University ended in 2019</p>
                                </div>
                                <div className='my-5'>
                                    <p className='text-gray-600 text-base'>
                                        <span className='text-yellow-500'>2nd year</span> Computer science
                                    </p>
                                    <p className='text-gray-400 text-xs'> Mouloud Mammeri University ended in 2018</p>
                                </div>
                                <div className='my-5'>
                                    <p className='text-gray-600 text-base'>
                                        <span className='text-yellow-500'>1st year</span> Computer science and mathematics
                                    </p>
                                    <p className='text-gray-400 text-xs'> Mouloud Mammeri University ended in 2017</p>
                                </div>
                                <div className='my-5'>
                                    <p className='text-gray-600 text-base'>
                                        <span className='text-yellow-500'>Baccalaureate</span> in mathematics field
                                    </p>
                                    <p className='text-gray-400 text-sm'> Colonel Amirouche High school 2016</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos='zoom-out-left'>
                    <div className='my-10 sm:my-40 w-full lg:w-1/2 h-128 sm:h-96 ml-auto shadow bg-gray-200 bg-opacity-80 rounded-md xl:mr-14'>
                        <div className='text-center'>
                            <div className='border-b-2 border-yellow-500 pb-4 mx-10 sm:mx-40'>
                                <p className='text-yellow-500 text-xl pt-4'>How did i get here ?</p>
                            </div>
                            <div className='text-gray-700 text-sm xl:text-base mt-10 px-4 xl:px-8 2xl:px-20'>
                                <p className='mb-5'>
                                    <span className='text-xl text-yellow-500 pr-3'>Everything</span> started since 2014 when i first googled "How to create a website", this was the
                                    moment i've landed into <span className='text-yellow-500'>HTML</span>, for an instant it was astonishing, few mounth later i jumped into
                                    <span className='text-yellow-500'> javascript</span> and that was much more exciting i literally fell in love with that language.
                                </p>
                                <p className=''>
                                    Who am i ?, Alright since i've got my baccalaureate in mathematics field, i signed up in Mouloud Mammeri Tizi-Ouzou university and i'm still
                                    there finishing my course in computer science domain i'm a guy who was completely addictive to video games like Counter Strike but for now i
                                    spent my time more <span className='text-yellow-500'>coding</span> and <span className='text-yellow-500'>learning</span> then anything else.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popups
