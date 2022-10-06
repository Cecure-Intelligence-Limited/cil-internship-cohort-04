import React from 'react'

import Button from './Button'
import Tasks from './Task'
const Header = ({title, onAdd, showAdd}) => {
    const onClick=() =>{
        console.log('clicky')
        
    }
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd? 'red' : 'green'} text={showAdd? 'Close' : 'Add'} onClick={onAdd}/>
        
        </header>
  )
}

Header.defaultProps={
    title: 'To do list'
}

export default Header
