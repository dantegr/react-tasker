import React from 'react';

const Task = ({ task, index, completeTask, deleteTask}) => {
    return(
        <div className="task" 
        style={{textDecoration: task.isCompleted ? "line-through" : ""}}>
            {task.text}
        
            <div>
                <button onClick={() => completeTask(index)}>Complete</button>
            </div>
            <div>
                <button onClick={() => deleteTask(index)}>X</button>
            </div>
        </div>
    )
}

export default Task