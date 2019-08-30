import React from 'react'
import useInput from './hooks/useInput'


const TaskForm = ({title,addTask,updateTask,index}) => {

    const { value:task, bind:bindTask, reset:resetTask } = useInput('');
    const { value:dev, bind:bindDev, reset:resetDev } = useInput('');

    const handleInput = e => {
        e.preventDefault();  
        if (title === 'Add New Task'){
            if (!task || !dev) return
         addTask(task,dev)
        }else {
         updateTask(task,dev,index)
        }
        resetTask()
        resetDev()
    }

    return (
        <form className="taskForm-inline" onSubmit={handleInput}>
            <label>
                Task:
            </label>
            <input
                type="text"
                className="input"
                {...bindTask}
                />
            
            <label>
            Assign Dev:
            </label>
            <input
                type="text"
                className="input"
                {...bindDev}
                />
           
            <input type="submit" value="Submit" />
        </form>
    )

}
export default TaskForm