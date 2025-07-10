import React from "react";

const TaskList = ({ tasks, handleTask, deleteTask }) => {
  return (
    <>
      <div className="list-container">
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="list-items">
              <span className={task.completed && "completed"} onClick={() => handleTask(task.id)}>{task.text}</span>
              <span className="delete" onClick={()=> deleteTask(task.id)}>X</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TaskList;
