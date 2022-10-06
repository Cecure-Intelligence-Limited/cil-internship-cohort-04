import React from 'react'

import Button from './Button'
import Tasks from './Task'
const Header = ({title, onAdd, showAdd}) => {
    const onClick=() =>{
        console.log('clicky')
        
    }
  return (
    <div>
    <header className='header'>
        <h1>{title}</h1>
        
        <Button color={showAdd? 'red' : 'green'} text={showAdd? 'Close' : 'Add'} onClick={onAdd}/>
        
        </header>
        <h2>Instruction</h2>
        <p> Click close to close the form. 
          Click add to add a new task.
           </p>
           <p>Double click a task to change it from completed to uncompleted and 
           vise versa. </p><p>Click the  red X to delete a task. Enjoy amigo. Remember dont
           be lazy</p>
        </div>
  )
}

Header.defaultProps={
    title: 'To do list'
}

export default Header
