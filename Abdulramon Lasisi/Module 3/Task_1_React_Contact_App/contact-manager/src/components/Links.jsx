import React from 'react'
import { FaHome, FaRegAddressBook, FaRegQuestionCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

const Links = () => {
  const { sidebar, setIsEdit } = useGlobalContext()

  return (
    <div
      className={`pt-3 -ml-4 space-y-4 ${
        sidebar ? 'block' : 'hidden'
      } sm:flex sm:gap-8 sm:space-y-0`}
    >
      <Link
        to='/'
        className='flex items-center gap-1 cursor-pointer text-gray-300 hover:text-gray-100'
        onClick={() => setIsEdit(false)}
      >
        <FaHome />
        Home
      </Link>

      <Link
        to='/contact/add'
        className='flex items-center gap-1 cursor-pointer text-gray-300 hover:text-gray-100'
        onClick={() => setIsEdit(false)}
      >
        <FaRegAddressBook />
        Add
      </Link>

      <Link
        to='about'
        className='flex items-center gap-1 cursor-pointer text-gray-300 hover:text-gray-100'
        onClick={() => setIsEdit(false)}
      >
        <FaRegQuestionCircle />
        About
      </Link>
    </div>
  )
}

export default Links
