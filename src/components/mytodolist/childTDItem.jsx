import React, { useState } from 'react'

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();

    let todoInput = event.target.todoInput.value;
    setTodoList([...todoList, todoInput]);

    event.target.todoInput.value = '';
  }

  return (
    <div className="todo-list">
      <form onSubmit={addTodo}>
        <input
          type="text"
          name="todoInput"
          placeholder="Create a new To-Do"
        />
        <input type="submit" value="Create" />
      </form>

      {todoList.map((todo, index) => (
        <div key={index} className="todo">{todo}</div>
      ))}
    </div>
  )
}

export default TodoList;