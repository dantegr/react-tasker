import React, { useState } from 'react'
import Task from './Task'
import TaskForm from './TaskForm'

const App = () => {

    const[tasks,setTasks] = useState([
        {text: "cook",
         isCompleted: false,
         isDeleted: false},
        {text: "get the thrash out",
        isCompleted: false,
        isDeleted: false},
        {text: "make a react app",
        isCompleted: false,
        isDeleted: false}
    ])

    const[delTasks,setDelTasks] = useState([
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

    const deleteTask = index => {
        const newTasks = [...tasks]
        newTasks[index].isDeleted= true;
        setDelTasks([...delTasks, newTasks[index] ])
        newTasks.splice(index,1)
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
                        deleteTask={deleteTask}
                        />
                    ))}
                    <hr />
                     {delTasks.map((task, index) =>
                    (
                        <Task
                        key={index}
                        index={index}
                        task={task}
                        completeTask={completeTask}
                        deleteTask={deleteTask}
                        />
                    ))}
            </div>
        </div>
    )
    
}
export default App