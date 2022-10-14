import React, {useState, useEffect} from 'react';
import './App.css';
import InputForm from './Components/InputForm';
import TodoList from './Components/TodoList';

function App() {
  //state to store input text
  const [inputText, setInputText] = useState("");
  //state to store all your todos - list of array of object.  
  const [todos, setTodos] = useState([]);
  //state to store filter status
  const [status, setStatus] = useState("all")
  //state to filter
  const[filteredTodos, setFilteredTodos] = useState([]);

  //Use Effect
  useEffect(() => {
    filterhandler();
  }, [todos, status]);

  const filterhandler = () =>{
    switch(status){
      case"completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Todo List App</h1>
      </header>
      <InputForm 
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText ={setInputText}
        setStatus ={setStatus}
      />
      <TodoList 
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
