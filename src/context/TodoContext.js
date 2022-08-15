import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    { id: 1289, task: "Sample Task", completed: false },
  ]);
  const providerValue = {
    input,
    setInput,
    todos,
    setTodos,
  };
  return (
    <TodoContext.Provider value={providerValue}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
