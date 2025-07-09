import React from 'react'

const TaskList = ({tasks, handleTask}) => {
  return (
    <>
      <div className='list-container'>
          <ul>
              {tasks.map((task, index) =>  <li key={index} className={`list-items ${task.completed && 'completed'}`} onClick={()=> handleTask(task.id)}>{task.text}</li>)}
          </ul>
      </div>
    </>
  );
}

export default TaskList