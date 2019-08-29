import React from 'react';

const Task = ({ task, index, completeTask}) => {
    return(
        <div className="task" 
        style={{textDecoration: task.isCompleted ? "line-through" : ""}}>
            {task.text}
        
            <div>
                <button onClick={() => completeTask(index)}>Complete</button>
            </div>
        </div>
    )
}

export default Task