import React, { useState } from "react";
import "./App.css";
import Addtodo from "./components/Addtodo";
import TodoList from "./components/TodoList";

function App() {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  return (
    <>
      <h1>To-Do List</h1>
      <Addtodo
        editId={editId}
        setEditId={setEditId}
        editText={editText}
        setEditText={setEditText}
      />
      <TodoList setEditId={setEditId} setEditText={setEditText} />
    </>
  );
}

export default App;
