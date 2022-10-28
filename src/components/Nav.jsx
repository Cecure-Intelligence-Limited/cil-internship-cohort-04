import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { GiHamburgerMenu } from "react-icons/gi";
import { CiHome } from "react-icons/ci";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { AiFillFileAdd } from "react-icons/ai";




const Nav = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='px-8 py-6 bg-gray-800 md:flex md:justify-between md:items-center md:px-24'>
          <div className="logo pl-4 flex justify-between text-gray-50 font-bold text-lg">
              <h1>Contact Manager</h1>
              <div className='border py-2 px-4 border-gray-600 md:hidden' onClick={handleNav}>
                                <GiHamburgerMenu className='text-gray-300 '/>

              </div>
          </div>
          <div className={nav ? 'text-left space-y-4 md:flex md:items-center md:space-y-0 md:space-x-6' : "hidden md:flex md:space-x-6"}>
              <div className='flex  text-gray-500'>
                  <Link to="/" className='flex items-center space-x-2'>
                      <CiHome /> 
                      <p>Home</p>
                  </Link>
                
              </div>

              <div className='flex items-center space-x-2 text-gray-500'>
                  <Link to="/Add" className='flex items-center space-x-2'>
                    <AiFillFileAdd />
                    <p>Add</p> 
                  </Link>
                
              </div>

              <div className='flex items-center space-x-2 text-gray-500'>
                  <Link to="/About" className='flex items-center space-x-2'>
                    <AiOutlineQuestionCircle />
                    <p>About</p> 
                  </Link>
              </div>
              
          </div>
    </div>
  )
}

export default Nav
