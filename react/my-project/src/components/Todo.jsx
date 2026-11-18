import React, { useState } from "react";

function Todo() {
  // 1. Store all tasks
  const [todos, setTodos] = useState([]);

  // 2. Store input value
  const [input, setInput] = useState("helloo");

  // 3. Add Todo
  const addTodo = () => {
    if (input === "") {
      alert("Please enter a task");
      return;
    }

    setTodos([...todos, input]);

    setInput("");
  };

  // 4. Delete Todo
  //   const deleteTodo = (index) => {
  //     const newTodos = todos.filter((todo, i) => {
  //       return i !== index;
  //     });
  //
  //     setTodos(newTodos);
  //   };

  return (
    <div>
      <h2>My Todo App</h2>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Enter your task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {/* Add Button */}
      <button onClick={addTodo}>Add Task</button>

      {/* Display Tasks */}
      <ul>
        {todos.map((x, index) => (
          <li key={index}>
            {x}

            {/* <button onClick={() => deleteTodo(index)}>Delete</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
