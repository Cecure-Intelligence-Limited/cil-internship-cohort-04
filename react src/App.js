import './App.css';
import { useState } from 'react'
import {useEffect}  from  'react'


import {  Routes, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';
import Add from './components/Add';
import About from './components/About';

function App() {
   const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  // fetch tasks
  const fetchTasks = async () => {
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()

      return data
    }
  
  // add task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()
    setTasks([data, ...tasks])
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([ newTask, ...tasks])
  }
  
  // update task
  
  
  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
    
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home tasks={tasks} onDelete={deleteTask } />} />
        <Route path="/Add" element={<Add onAdd={addTask} />} />
        <Route path="/About" element={<About  />} />
      </Routes>
    </div>
  );
}

export default App;
