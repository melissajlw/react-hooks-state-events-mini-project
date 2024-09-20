import React from "react";

function Task({ category, text, handleDelete }) {

  function handleClick() {
    handleDelete(text)
  }
  return (
    <div className="task">
      <div className="category">{ category }</div>
      <div className="text">{ text }</div>
      <button className="delete" onClick={ handleClick }>
        X
      </button>
    </div>
  );
}

export default Task;
