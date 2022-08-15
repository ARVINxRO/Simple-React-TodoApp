import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Todo = ({ todo }) => {
  const { todos, setTodos, setInput } = useContext(TodoContext);
  const checkClick = ({ id }) => {
    setTodos(
      todos.map((t) => {
        if (t.id === id) {
          return { ...t, status: !t.status };
        }
        return t;
      })
    );
  };

  const editClick = ({ task, id }) => {
    setInput(task);
    setTodos(todos.filter((t) => t.id !== id));
  };

  const deleteClick = ({ id }) => {
    setTodos(todos.filter((t) => t.id !== id));
  };
  return (
    <div className="todo-container">
      <h4 className={todo.status ? "todo-done" : "todo"}>{todo.task}</h4>
      <div className="todo-btns">
        <button onClick={() => checkClick(todo)} className="todo-btn check-btn">
          <i className="bi bi-check2-square"></i>
        </button>
        <button onClick={() => editClick(todo)} className="todo-btn edit-btn">
          <i className="bi bi-pencil-square"></i>
        </button>
        <button
          onClick={() => deleteClick(todo)}
          className="todo-btn delete-btn"
        >
          <i className="bi bi-trash3-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;
