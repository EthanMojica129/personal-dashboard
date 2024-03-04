
import React, { useState } from "react";


export const ToDoList = () => {
    const [currentTodo, setCurrentTodo] = useState("");
    const [todos, setTodos] = useState([
      {
        todo: "Play videogames",
        isCompleted: true
      },
      {
        todo: "go for a walk",
        isCompleted: false
      },
      {
        todo: "Create a React App",
        isCompleted: false
      }
    ]);

    function createNewTodo(currentTodo) {
      let todosArray = [...todos];
      todosArray.push({
        todo: currentTodo,
        isCompleted: false
      });
      setTodos(todosArray);
    }

    function completeTodo(index) {
      let todosArray = [...todos];
      todosArray[index].isCompleted = !todosArray[index].isCompleted;
      setTodos(todosArray);
    }
  
    function deleteTodo(index) {
      let todosArray = [...todos];
      todosArray.splice(index, 1);
      setTodos(todosArray);
    }
  
    return (
      <div className="toDo">
        <h1> Today To Do List</h1>
        <input
          className="todo-input"
          value={currentTodo}
          onChange={e => {
            setCurrentTodo(e.target.value);
          }}
          onKeyPress={e => {
            if (e.key === "Enter") {
              createNewTodo(currentTodo);
              setCurrentTodo("");
            }
          }}
          placeholder="What needs to get done?"
        />
        <button onClick={() => {createNewTodo(currentTodo); setCurrentTodo("")}}>Add</button>
        {todos.map((todo, index) => (
          <div key={todo} className="todo">
            <div className="checkbox" onClick={() => completeTodo(index)}>
              {todo.isCompleted && <span>&#x2714;</span>}
            </div>
            <div className={todo.isCompleted ? "done" : ""}>{todo.todo}</div>
            <div className="delete" onClick={() => deleteTodo(index)}>
              &#128465;
            </div>
          </div>
        ))}
        {todos.length > 0 && `${todos.length} items`}
      </div>
    );
}
