import React, { useState} from 'react'

const TaskForm = ({addTask}) => {
    const [value, setValue] = useState("")

    const handleInput = e => {
        e.preventDefault();
        if (!value) return;
        addTask(value);
        setValue("")
    }

    return (
        <form onSubmit={handleInput}>
            <input
                type="text"
                className="input"
                value={value}
                onChange={e => setValue(e.target.value)}
                />
        </form>
    )

}
export default TaskForm