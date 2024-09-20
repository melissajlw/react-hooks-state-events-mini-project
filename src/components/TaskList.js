import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete }) {
  // map tasks to Task elements
  const taskData = tasks.map((task) => (
    <Task 
      key={ task.text } 
      category={ task.category } 
      text={ task.text } 
      handleDelete={ handleDelete }/>
  ))
  
  return (
    <div className="tasks">
      { taskData }
    </div>
  );
}

export default TaskList;
