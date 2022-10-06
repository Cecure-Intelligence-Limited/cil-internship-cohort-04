import Tas from './Tas'

const Tasks = ({tasks, onDelete, onToggle})=>{

    //console.log(tasks[0]);
    if (tasks[0]){
            console.log(tasks.length)
        return (
            <>
               {tasks.map((task)=>(
               
               <Tas key={task.id} task ={task}
               onDelete={onDelete}
               onToggle={onToggle}/>))} 
            </>
        )
    }
    else return (
        <div> could not load tasks</div>
    )
}

export default Tasks