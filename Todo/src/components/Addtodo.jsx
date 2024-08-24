import React, { useEffect, useState } from "react";
import "./addtodo.css";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../feauters/todoSlice";

function Addtodo({ editId, setEditId, editText, setEditText }) {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (editId !== null) {
      setInput(editText);
    }
  }, [editId, editText]);

  const addToDoAndEditTodo = (e) => {
    e.preventDefault();

    if (editId !== null) {
      dispatch(editTodo({ id: editId, newText: input }));
      setEditId(null);
      setEditText("");
    } else {
      if (input.trim()) {
        dispatch(addTodo(input));
      }
    }

    setInput("");

    return (
      <div>
        <form className="form" onSubmit={addToDoAndEditTodo}>
          <input
            name="todo"
            required
            className="todoInput"
            type="text"
            placeholder="Add Todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn" type="submit">
            {editId ? "Update" : "Add"} Todo
          </button>
        </form>
      </div>
    );
  };
}

export default Addtodo;
