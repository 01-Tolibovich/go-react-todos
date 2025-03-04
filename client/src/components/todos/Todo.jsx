import { useEffect, useState } from "react";
import check from "../../icons/check.svg";
import deleteIcon from "../../icons/delete_busket.svg";
import arrow from "../../icons/dropdown_arrow.svg";
import todoList from "../../icons/todo_list.svg";

import "./styles.scss";
// import { completeTodo } from "../../protocols/rest";

const Todo = ({ todo, deleteTodo, conpletedHandle, isOpen, handleToggleTodo, isLoading }) => {

  console.log("render todo item");

  useEffect(() => {}, [todo.completed])

  console.log(todo);
  
  

  return (
    //создат класс и стилизовать is-complited
    <div className={`todo ${todo.completed ? "is-comoplited" : ""}`}>
      <header className="header">
        <img className="todo-list-icon" src={todoList} alt="" />
        <img
          className="delete-icon"
          role="button"
          onClick={() => deleteTodo(todo.id)}
          src={deleteIcon}
          alt=""
        />
        <img
          className="check"
          role="button"
          onClick={() => conpletedHandle(todo.id)}
          src={check}
          alt=""
        />
        <hr />
        <h3 role="button" onClick={() => handleToggleTodo(todo.id)}>
          {todo.title}
        </h3>
        <img 
          role="button"
          onClick={() => handleToggleTodo(todo.id)}
          className={`arrow-icon ${isOpen.id === todo.id && isOpen.active ? "arrow-opened" : ""}`}
          src={arrow}
          alt=""
        />
      </header>
      <div
        className={`description ${isOpen.id === todo.id && isOpen.active ? "fool-content" : ""}`}
      >
        <h4>{todo.title}</h4>
        <p>{todo.body}</p>
      </div>
    </div>
  );
};

export default Todo;
