import React, { useState } from 'react'
import Task from './Task'
import TaskForm from './TaskForm'

const App = () => {

    const[tasks,setTasks] = useState([
        {text: "cook"},
        {text: "get the thrash out"},
        {text: "make a react app"}
    ])

    const addTask = text => {
        const newTasks = [...tasks, {text}];
        setTasks(newTasks);
    }

    return (
        <div classname="app">
            <div className="task-list">
                <TaskForm addTask={addTask} />
                {tasks.map((task, index) =>
                    (
                        <Task
                        key={index}
                        index={index}
                        task={task}
                        />
                    ))}
            </div>
        </div>
    )
    
}
export default App