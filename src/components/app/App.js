import React, { useState} from 'react'
import Task from './Task'

const App = () => {

    const[tasks,setTasks] = useState([
        {text: "cook"},
        {text: "get the thrash out"},
        {text: "make a react app"}
    ])

    return (
        <div classname="app">
            <div className="task-list">
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