import {useState} from 'react'
import Hero from "./Hero";
import Tasks from "./Tasks";

function Home({ tasks, onDelete}) {
   
  return (
    <div>
      <Hero />
      <Tasks tasks={tasks} onDelete={onDelete}
      />
    </div>
  )
}

export default Home
