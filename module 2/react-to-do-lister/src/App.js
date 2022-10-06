import { useState , useEffect} from 'react'
//import './App.css';

import Header from './components/Header'
import Tasks from './components/Task';
import AddTask from './components/AddTask';

const App = ()=> {
  const [showAddTask, setShowAddTask] = useState(true)
const [tasks, setTasks] = useState([ 

  useEffect(()=>{
    const getTasks = async () =>{
      const tasksFromServer = await fetchTasks ()
      setTasks(tasksFromServer)
    }
    getTasks()

  }, []   )
])
// fetch task
const fetchTasks = async () =>{
  const res = await fetch ('https://jsonplaceholder.typicode.com/todos')
  const data =await res.json()
 // console.log(data)
  return data
}
 // add task
const addTask = async (task) =>{
 
  const id= tasks.length +1
  const userId= Math.floor(Math.random()*100)+1
  const newTask ={userId, id, ...task}
  
  console.log(newTask)/*
  setTasks([...tasks, newTask])*/
  const res = await fetch ('https://jsonplaceholder.typicode.com/todos',
  {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newTask),
  })
  const data= await res.json()
  console.log(data)

  setTasks([...tasks, data])

}
const deleteTask =(id) =>{

  console.log('deleting ...', id)
  setTasks(tasks.filter((task) =>task.id !==id))
}
const toggleCompleted = (id)=>{
  console.log(id);
  setTasks(tasks.map((task) => task.id === id ?
  {...task, completed:!task.completed} : task))
}

  return (
    <div className="App">
          <Header onAdd={()=> setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
          />
          {showAddTask && 
          <AddTask onAdd={addTask}/>}
         {tasks.length >0 ?(
         
         <Tasks tasks={tasks} 
          onDelete={deleteTask}
          onToggle ={toggleCompleted}/>
         ) : ('no task')}
    </div>
  );
}

export default App;
