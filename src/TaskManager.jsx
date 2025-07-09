import React, { useState } from 'react'
import AddTask from './AddTask';
import TaskList from './TaskList';

const TaskManager = () => {
  let [tasks, setTasks] = useState([])

  let saveTask = (text) => {
    let newTask = { id: Date.now(), text, completed: false }
    setTasks([...tasks,newTask])
  }
  
  let handleTask = (id) => {
    setTasks(tasks.map((task) => {
      return task.id == id ? {...task, completed: !task.completed} : task
    }))
  }
    
  return (
    <>
      <section id='task-container'>
        <h1 id='title'>TASK MANAGER</h1>
        <AddTask save={saveTask} />
        <TaskList tasks={tasks} handleTask={handleTask} />
      </section>
    </>
  );
}

export default TaskManager