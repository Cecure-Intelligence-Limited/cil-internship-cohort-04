const Tas =({task, onDelete, onToggle}) =>{
    return (
        <div className="tas" onDoubleClick={()=>onToggle(task.id)}>
            <h3> {task.title} {' '}
            
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