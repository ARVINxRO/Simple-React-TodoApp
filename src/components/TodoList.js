import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import Todo from "./Todo";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div className="todo-list">
      {todos.map((t, i) => (
        <Todo todo={t} key={i} />
      ))}
    </div>
  );
};

export default TodoList;
