import React from 'react'

const Hero = () => {
  return (
    <div className='bg-gray-200 m-4 py-12 pl-8 md:mx-32 md:py-16'>
          <h2 className='text-center font-semibold text-gray-800 text-3xl'>Contact Manager</h2>
          
          <p className='mt-2 text-left font-thin text-xl text-gray-700'>This is a portfolio project to showcase knowledge of: </p>

          <div className='text-left mt-4 text-gray-800 '>
              <p>i. React Components and JSX.</p>
              <p>ii. React Router.</p>
              <p>iii. Component state management.</p>
              <p>iv. Context api for global state management.</p>
              <p>v. Making asynchronous calls to the Json placeholder fake rest api using "async/await".</p>
          </div>
    </div>
  )
}

export default Hero
