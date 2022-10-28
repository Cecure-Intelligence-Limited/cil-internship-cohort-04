import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context'

const Button = () => {
  const { toggleSidebar } = useGlobalContext()

  return (
    <button
      className='cursor-pointer px-4 py-1 border-solid border border-gray-200 rounded-md shadow-slate-800 shadow-inner sm:hidden'
      onClick={toggleSidebar}
    >
      <FaBars className='text-3xl text-gray-400' />
    </button>
  )
}

export default Button
