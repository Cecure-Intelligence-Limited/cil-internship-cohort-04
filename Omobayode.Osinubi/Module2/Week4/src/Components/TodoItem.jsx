import React from 'react';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';


const TodoItem = ({text, todo, todos, setTodos }) => {

  //filter out elements(el) that is not the todo
  const deleteHandler = () =>{
    setTodos(todos.filter(el => el.id !== todo.id));
  }
  const doneHandler =()=>{
    setTodos(todos.map((item) =>{
      if(item.id === todo.id ){
        return{
          ...item, completed: !item.completed,
        };
      }
      return item;
    }))
  };
  return ( 
    <div className='todo'>
      <li className={`todo-item ${todo.completed && "completed"}`}>{text}</li>
      <button onClick={doneHandler} className='complete-btn'><DoneIcon /></button>
      <button onClick={deleteHandler} className='trash-btn'><DeleteIcon /></button>
    </div>
  )
}

export default TodoItem;