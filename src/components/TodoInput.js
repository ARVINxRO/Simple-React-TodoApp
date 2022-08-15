import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { v4 as uuidv4 } from "uuid";

const TodoInput = () => {
  const { input, setInput, todos, setTodos } = useContext(TodoContext);

  const inputChange = (e) => {
    setInput(e.target.value);
  };

  const addClick = (e) => {
    e.preventDefault();
    if (input) {
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          task: input,
          completed: false,
        },
      ]);
      setInput("");
    }
  };
  return (
    <form className="input-container">
      <input
        type="text"
        placeholder="Type task here..."
        className="todo-input"
        onChange={inputChange}
        value={input}
      />
      <button onClick={addClick} className="add-btn">
        <i class="bi bi-plus-lg"></i>
      </button>
    </form>
  );
};

export default TodoInput;
