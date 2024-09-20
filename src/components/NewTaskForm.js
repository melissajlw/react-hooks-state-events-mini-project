import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code")

  function handleText(event) {
    setText(event.target.value)
  }

  function handleCategory(event) {
    setCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    onTaskFormSubmit({ text, category})
    setText("")
  }

  return (
    <form className="new-task-form" onSubmit={ handleSubmit }>
      <label>
        Details
        <input type="text" name="text" value={ text } onChange={ handleText }/>
      </label>
      <label>
        Category
        <select name="category" value={ category } onChange={ handleCategory }>
          {(categories.slice(1)).map((cat) => (
            <option key={ cat } value={ cat }>
              { cat }
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
