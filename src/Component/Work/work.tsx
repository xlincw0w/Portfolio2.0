import React from 'react'

const Work: React.FunctionComponent<{}> = () => {
    return (
        <div className='w-full bg-popupsBack2 bg-center bg-cover select-none' style={{ minHeight: '2000px' }}>
            <div className='text-center pt-20'>
                <p className='text-5xl text-red-400 pb-10 border-b-2 border-red-400 inline'>How it works !</p>
            </div>
            <div className='pt-48 text-center'>
                <p className='text-gray-600 text-4xl'>Getting started</p>
                <p className='text-gray-400 text-xl pt-16 w-2/3 lg:w-1/3 mx-auto'>
                    There is a standard way that i work with all my projects, however, all starts with a conversation where we get to know each other. It also helps me understand
                    what you’re all about. From there I’ll get you to fill in a brief so I can grasp the important details.
                </p>
            </div>
            <div className='pt-48 text-center'>
                <p className='text-gray-600 text-4xl'>Design &amp; Development</p>
                <p className='text-gray-400 text-xl pt-16 w-2/3 lg:w-1/3 mx-auto'>
                    it starts off with wireframes and design as the first step. When the design is signed off the project goes into development. From there I built the site using
                    react, or whatever tool we’ve decided is applicable to your project.
                </p>
            </div>
            <div className='pt-48 text-center'>
                <p className='text-gray-600 text-4xl'>Launch</p>
                <p className='text-gray-400 text-xl pt-16 w-2/3 lg:w-1/3 mx-auto'>
                    After the site is built I’ll give you as much tutoring as you’ll need. This will allow you to fully control over managing the site in the future, and of course
                    even after the site is deployed i'll be available.
                </p>
            </div>
        </div>
    )
}

export default Work
