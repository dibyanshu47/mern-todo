import React, { useState, useEffect } from "react";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { getTodos } from "./services";

function App() {

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const { data } = await getTodos();
        setTodos(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTodos();
  }, []);

  // useEffect(() => {
  //   setTodos(JSON.parse(localStorage.getItem("todos")));
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  return (
    <div>
      <TodoInput todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
