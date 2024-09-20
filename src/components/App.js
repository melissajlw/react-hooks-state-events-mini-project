import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)

  function handleDelete(deletedTask) {
    setTasks(tasks.filter((task) => task.text !== deletedTask))
  }

  function handleFilter(category) {
    (category === "All") ? 
      setTasks(TASKS) : setTasks(TASKS.filter((task) => task.category === category))
  }

  function onTaskFormSubmit(task) {
    setTasks([...tasks, task])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={ CATEGORIES } onFilter={ handleFilter }/>
      <NewTaskForm categories = { CATEGORIES } onTaskFormSubmit = { onTaskFormSubmit }/>
      <TaskList tasks={ tasks } handleDelete={ handleDelete }/>
    </div>
  );
}

export default App;
