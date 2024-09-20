import React, { useState } from "react";

function CategoryFilter({ categories, onFilter }) {
  const [selectedCategory, setCategory] = useState("All")

  // only one category selected at a time
  const buttons = categories.map((category) => {
    const className = (category === selectedCategory ? "selected" : null)

    // change category and filter the elements of the selected category
    function handleSelect() {
      setCategory(category)
      onFilter(category)
    }

    return (
      <button 
        key={ category } 
        className={ className }
        onClick={ handleSelect }>
          { category }
      </button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      { buttons }
    </div>
  );
}

export default CategoryFilter;
