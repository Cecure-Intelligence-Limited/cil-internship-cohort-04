const Tas =({task, onDelete, onToggle}) =>{
    return (
        <div className="tas" onDoubleClick={()=>onToggle(task.id)}>
            <h3> {task.title} {'  '} <b style ={ {color: 'Blue', fontWeight:900, fontSize:20}}> Done:</b> <u>{task.completed?'Completed':'Not Completed (dont be lazy)'}</u>  
            
            <p style={ {color: 'red'}}
            onClick={()=>onDelete(task.id)}
            > X
            
            </p>
            
            </h3>
        </div>
    )
}

export default Tas
//json-server --watch db.json --port 5000