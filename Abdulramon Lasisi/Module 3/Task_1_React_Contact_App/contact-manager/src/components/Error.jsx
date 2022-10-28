import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='text-center my-8'>
      <h2>Oops you navigated to a wrong url</h2>
      <button className='mt-8 border px-4 py-1 cursor-pointer rounded-md shadow-sm border-gray-700 text-gray-700 hover:text-gray-100 hover:bg-gray-700 transition'>
        <Link to='/'>Back Home</Link>
      </button>
    </section>
  )
}

export default Error
