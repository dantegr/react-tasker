import React, { useState } from 'react'
import Task from './Task'
import TaskForm from './TaskForm'
import Modal from "./Modal"


const App = () => {

    const [isModalOpen, toggleModal] = useState(false);

    const[tasks,setTasks] = useState([
        {text: "cook",
         dev:"george",
         isCompleted: false},
        {text: "get the thrash out",
        dev:"jim",
        isCompleted: false},
        {text: "make a react app",
        dev:"mike",
        isCompleted: false}
    ])

    const[delTasks,setDelTasks] = useState([  ])

    const addTask = (text,dev) => {
        const newTasks = [...tasks, {text,dev}]
        setTasks(newTasks)
    }

    const updateTask = (text,dev,index) => {
        const newTasks = [...tasks, {text,dev}]
        newTasks[index].text = text
        newTasks[index].dev = dev
        setTasks(newTasks)
    }



    const completeTask = index => {
        const newTasks = [...tasks]
        newTasks[index].isCompleted= true
        setTasks(newTasks)
    }

    

    const deleteTask = index => {
        const newTasks = [...tasks]
        const deleTasks = [...delTasks]
        deleTasks[index] = {text: newTasks[index].text, dev: newTasks[index].dev}
        setDelTasks(deleTasks)
        newTasks.splice(index,1)       
        setTasks(newTasks)
    }

    return (
        <div classname="app">
            <div className="task-list">
         
                <TaskForm addTask={addTask}  title="Add New Task" />
                 <button onClick={() => toggleModal(!isModalOpen)}>Deleted Tasks</button>
                 <Modal isOpen={isModalOpen} toggle={toggleModal}>
                    <h1>Deleted Tasks</h1>
                    {delTasks.map((task, index) =>
                            ( 
                                <div key={index}
                                index={index}>
                                    <p>Task: {task.text}  Assigned To: {task.dev}</p>
                                </div>
                            ))}   
                    <button onClick={() => toggleModal(false)}>Close</button>
                    
                 </Modal>
       
                {tasks.map((task, index) =>
                    (
                        <Task
                        key={index}
                        index={index}
                        task={task}
                        completeTask={completeTask}
                        deleteTask={deleteTask}
                        updateTask={updateTask}
                        
                            />
                    ))}
                    <hr />
            </div>
        </div>
    )
    
}
export default App