import React from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';

function InputForm({inputText, setInputText, todos, setTodos, setStatus}) {
  //update the text input as it changes
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  }
  
  //update the todolist
  const addTodo = (e) =>{
    e.preventDefault();
    inputText && setTodos([
      ...todos, {text: inputText, completed: false, id: Math.random() * 10000} 
    ]);  
    //set the input state value back to "" and remeber to use controlled input in your form by setting input value={inputText} to update the UI to "".
    setInputText("");
  };
  const statusHandler = (e) =>{
    setStatus(e.target.value);
  }
  return (
    <form>
      <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input" />
      <button onClick={addTodo} className="todo-button" type="submit">
        <AddBoxIcon />
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default InputForm;