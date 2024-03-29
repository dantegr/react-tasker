import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Task from './Task'
import TaskForm from './TaskForm'


const App = () => {


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

    const addDelTask = (text,dev) => {
        const newTasks = [...delTasks, {text,dev}]
        setDelTasks(newTasks)
    }

    const updateTask = (text,dev,index) => {
        const newTasks = [...tasks]
        if (text === ""){
            newTasks[index] = { text:newTasks[index].text , dev: dev}
        } else if (dev === "") {
            newTasks[index] = { text: text, dev:newTasks[index].dev}
        } else {
        newTasks[index] = { text: text, dev: dev}
        }
        setTasks(newTasks)


    }

    const completeTask = index => {
        const newTasks = [...tasks]
        newTasks[index].isCompleted= true
        setTasks(newTasks)
    }
 

    const deleteTask = index => {
        const newTasks = [...tasks]
        addDelTask(newTasks[index].text,newTasks[index].dev )
        newTasks.splice(index,1)       
        setTasks(newTasks)
    }

    const ToggleContent = ({ toggle, content }) => {
        const [isShown, setIsShown] = React.useState(false);
        const hide = () => setIsShown(false);
        const show = () => setIsShown(true);
      
        return (
          <React.Fragment>
            {toggle(show)}
            {isShown && content(hide)}
          </React.Fragment>
        );
      }

      const Modal = ({ children }) => (
        ReactDOM.createPortal(
          <div className="modal">
            {children}
          </div>,
          document.body
        )
      );

    return (
        <div>
            <Header />
            <div className="taskFormAdd">
            <div className="widget-header">
            <h1 className="widget-header__title">Add Task</h1>
            </div>
            <div className="taskFormAdd-body">
            <TaskForm addTask={addTask}  title="Add New Task"  />
            </div>
            </div>
            
        <div className="container"> 
       
            
            <div className="widget">
            <div className="widget-header">
                <h1 className="widget-header__title">Task List</h1>
            </div>
                {tasks.map((task, index) =>
                    (
                        <Task
                        key={index}
                        index={index}
                        task={task}
                        completeTask={completeTask}
                        deleteTask={deleteTask}
                        content={<div>
                        <ToggleContent
                        toggle={show => <button className="button" onClick={show}>Update</button>}
                        content={hide => (
                            <Modal>
                                <span className="button-close" onClick={hide}>X</span>
                                <div className="widget-header">
                                
                                <h1 className="widget-header__title">Update Task</h1>
                                </div>
                                <TaskForm index={index} updateTask={updateTask}  title="Update Task" />
                                
                            </Modal>
                        )}
                        />
                        </div>
                        }                      
                            />
                          
                    ))}
                    
                    </div>
                    
                    <div className="widget">
                    <div className="widget-header">
                    <h1 className="widget-header__title">Deleted Tasks</h1>
                    </div>
                    <div className="task__text">
                    {delTasks.map((task, index) =>
                            ( 
                                <div key={index}
                                index={index}>
                                    <p>Task: {task.text}  Assigned To: {task.dev}</p>
                                </div>
                            ))} 
                    </div>
                    </div>
            
            </div>
        </div>
    )
    
}
export default App