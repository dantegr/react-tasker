import React from 'react';

const Task = ({ task, index, completeTask, deleteTask, updateTask}) => {
    

    return(
        <div className="task" 
        style={{textDecoration: task.isCompleted ? "line-through" : ""}}>
            Task: {task.text}  Assigned to: {task.dev} 
            <button onClick={() => updateTask(index)}>Update</button>
         
            <button onClick={() => completeTask(index)}>Complete</button>
            
            <button onClick={() => deleteTask(index)}>X</button>
            
        </div>
    )
}
export default Task