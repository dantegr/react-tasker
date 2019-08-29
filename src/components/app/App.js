import React, { useState } from 'react'
import Task from './Task'
import TaskForm from './TaskForm'
import Modal from "./Modal";
import useModal from './hooks/useModal';

const App = () => {

    const {appears, toggle} = useModal();

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

    const addTask = (text,dev) => {
        const newTasks = [...tasks, {text,dev}]
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
        setDelTasks([...delTasks, newTasks[index].tex ])
        newTasks.splice(index,1)
        setTasks(newTasks)
    }

    return (
        <div classname="app">
            <div className="task-list">
                <button className="button-default" onClick={toggle}>Add Task</button>
                <Modal
                    appears={appears}
                    hide={toggle}
                    content={
                        <TaskForm addTask={addTask} />   
                    }
                />
                {/* <button className="button-default" onClick={toggle}>Show Deleted Tasks</button>
                <Modal
                    appears={appears}
                    hide={toggle}
                    content={
                    delTasks.map((task, index) =>
                            (
                                <Task
                                key={index}
                                index={index}
                                task={task}
                                completeTask={completeTask}
                                deleteTask={deleteTask}
                                />
                            ))}   
                /> */}
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
                     {/* {delTasks.map((task, index) =>
                    (
                        <Task
                        key={index}
                        index={index}
                        task={task}
                        completeTask={completeTask}
                        deleteTask={deleteTask}
                        />
                    ))} */}
            </div>
        </div>
    )
    
}
export default App