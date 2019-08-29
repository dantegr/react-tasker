import React from 'react'
import useInput from './hooks/useInput'


const TaskForm = ({title,addTask,updateTask,index}) => {

    const { value:task, bind:bindTask, reset:resetTask } = useInput('');
    const { value:dev, bind:bindDev, reset:resetDev } = useInput('');

    const handleInput = e => {
        e.preventDefault();
        if (!task || !dev) return
        if (title === 'Add New Task'){
         addTask(task,dev)
        }else {
         updateTask(task,dev,index)
        }
        resetTask()
        resetDev()
    }

    return (
        <form onSubmit={handleInput}>
            <label>
            Task:<input
                type="text"
                className="input"
                {...bindTask}
                />
            </label>
            <label>
            Assign Dev:<input
                type="text"
                className="input"
                {...bindDev}
                />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )

}
export default TaskForm