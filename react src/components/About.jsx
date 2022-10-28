import React from 'react'
import Footer from './Footer'

const About = () => {
    return (
        <div className=''>
            <div className='pt-6 text-left px-6 md:px-32'>
                <h4 className='font-semibold text-4xl text-gray-900'>About Us</h4>

                <p className='text-xl font-light mt-2'>This is an app created to manage contacts. It could be seen and used as a backup for your contacts <span className='ml-12 font-normal text-gray-600 text-base'>... Version 1.0.0</span></p>
            </div>
            <Footer />
        </div>
      
  )
}

export default About
