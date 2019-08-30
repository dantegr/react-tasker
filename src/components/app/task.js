import React from 'react';

const Task = ({ task, index, completeTask, deleteTask,content}) => {
    

    return(
        <div className="task" 
        style={{textDecoration: task.isCompleted ? "line-through" : ""}}>
           <div className="task__text"> Task: {task.text}  Assigned to: {task.dev} </div>
            
            {content}
         
            <button onClick={() => completeTask(index)}>Complete</button>
            
            <button onClick={() => deleteTask(index)}>X</button>
            
        </div>
    )
}
export default Task