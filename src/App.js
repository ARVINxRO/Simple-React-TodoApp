import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoProvider from "./context/TodoContext";

const App = () => {
  return (
    <TodoProvider>
      <div className="container">
        <TodoInput />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
