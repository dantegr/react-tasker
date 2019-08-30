import React from 'react';

const Task = ({ task, index, completeTask, deleteTask,content}) => {
    

    return(
        <div className="task" 
        style={{textDecoration: task.isCompleted ? "line-through" : ""}}>
           <div className="task__text"> Task: {task.text}  Assigned to: {task.dev} </div>
            
            <div className="button-task">
            {content} <br />    
            <button onClick={() => completeTask(index)}>Complete</button>
            <br />
            <br />
            <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
            
            
        </div>
    )
}
export default Task