import { useState } from "react"
const AddTask = ( { onAdd}) =>{
const [title, setTitle] =useState('')
const [completed, setCompleted] =useState(false)
const onSubmit = (e)=>{
        e.preventDefault()
        if(!title){
            alert('please add a task')
            return
        }
        onAdd({title, completed});
        setTitle('')
        setCompleted(false)
}
    return (
        <form className ='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label> Task</label>
                <input type='text' placeholder="Add Task"
                value={title} onChange={(e) =>setTitle(e.target.value)}/>

            </div>

            <div className='form-control form-control-check'>
                <label> Completed</label>
                <input type='checkbox'
                checked = {completed}
                value={completed} onChange={(e) =>setCompleted(e.currentTarget.checked)}/>
                
            </div>
            <input type ='submit' value ='Save Task'
            className="btn btn-block "/>
        </form>

    )
}
export default AddTask