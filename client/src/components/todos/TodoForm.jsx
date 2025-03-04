import { useState } from "react";
import add from "../../icons/add.svg";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandle = (event) => {
    event.preventDefault();

    if (title) {
      addTodo(title, description);
      setTitle("");
      setDescription("");
    }
  };
  return (
    <form className="todo-form" onSubmit={submitHandle}>
      <input
        required
        title="This field must be filled in"
        placeholder="Add new Todo"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        name="description"
        id="2"
        cols="30"
        rows="7"
        placeholder="Add a description to the todo (Optional field)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">
        <img src={add} alt="" />
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
