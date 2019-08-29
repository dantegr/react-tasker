import React, { useState } from 'react'
import Task from './Task'
import TaskForm from './TaskForm'

const App = () => {

    const[tasks,setTasks] = useState([
        {text: "cook",
         isCompleted: false},
        {text: "get the thrash out",
        isCompleted: false},
        {text: "make a react app",
        isCompleted: false}
    ])

    const addTask = text => {
        const newTasks = [...tasks, {text}]
        setTasks(newTasks)
    }

    const completeTask = index => {
        const newTasks = [...tasks]
        newTasks[index].isCompleted= true;
        setTasks(newTasks)
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
                        completeTask={completeTask}
                        />
                    ))}
            </div>
        </div>
    )
    
}
export default App