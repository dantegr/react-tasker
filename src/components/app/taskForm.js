import React from 'react'
import useInput from './hooks/useInput'


const TaskForm = ({addTask}) => {

    const { value:task, bind:bindTask, reset:resetTask } = useInput('');
    const { value:dev, bind:bindDev, reset:resetDev } = useInput('');

    const handleInput = e => {
        e.preventDefault();
        // if (!value) return
        addTask(task,dev)
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
                // value={value}
                // onChange={e => setValue(e.target.value)}
                />
            </label>
            <label>
            Assign Dev:<input
                type="text"
                className="input"
                {...bindDev}
                // value={value}
                // onChange={e => setValue(e.target.value)}
                />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )

}
export default TaskForm