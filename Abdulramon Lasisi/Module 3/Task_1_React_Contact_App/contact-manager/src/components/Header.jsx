import React from 'react'
import Title from './Title'
import Button from './Button'
import Links from './Links'

const Header = () => {
  return (
    <header className='bg-gray-700 text-white px-8 py-2 mb-2 sm:flex sm:justify-between sm:items-center'>
      <nav className='flex items-center justify-between'>
        <Title />
        <Button />
      </nav>

      <Links />
    </header>
  )
}

export default Header
