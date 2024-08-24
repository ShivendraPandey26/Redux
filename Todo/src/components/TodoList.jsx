import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../feauters/todoSlice";
import "./todolist.css";

function TodoList({ setEditId, setEditText }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleEditTodo = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  }
 
  return (
    <>
      <ul id="todo-list">
        {todos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            {todo.text}
            <div>
            <button
              className="remove-btn"
              onClick={() => handleEditTodo(todo)}
            >
              Edit
            </button>
            <button
              className="remove-btn"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              Remove
            </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
