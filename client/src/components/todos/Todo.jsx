import check from "../../icons/check.svg";
import deleteIcon from "../../icons/delete_busket.svg";
import arrow from "../../icons/dropdown_arrow.svg";
import todoList from "../../icons/todo_list.svg";

import "./styles.scss";

const Todo = ({
  todo,
  deleteTodo,
  conpletedHandle,
  isOpen,
  handleToggleTodo,
}) => {
  return (
    //создат класс и стилизовать is-complited
    <div
      role="button"
      onClick={(e) => handleToggleTodo(e, todo._id)}
      className={`todo ${todo.completed ? "is-comoplited" : ""}`}
    >
      <header className="header">
        <img className="todo-list-icon" src={todoList} alt="" />
        <img
          className="delete-icon"
          role="button"
          onClick={(e) => deleteTodo(e, todo._id)}
          src={deleteIcon}
          alt=""
        />
        <img
            className={`check ${todo.completed ? "is-complited" : ""}`}
            role="button"
            onClick={(e) => conpletedHandle(e, todo._id)}
            src={check}
            alt=""
          />
        <hr />
        <h3>{todo.title}</h3>
        <img
          role="button"
          onClick={(e) => handleToggleTodo(e, todo._id)}
          className={`arrow-icon ${
            isOpen.id === todo._id && isOpen.active ? "arrow-opened" : ""
          }`}
          src={arrow}
          alt=""
        />
      </header>
      <div
        className={`description ${
          isOpen.id === todo._id && isOpen.active ? "fool-content" : ""
        }`}
      >
        <h4>{todo.title}</h4>
        <p>{todo.body}</p>
      </div>
    </div>
  );
};

export default Todo;
