import reset from "../../icons/resetsvg.svg";
import deleteIcon from "../../icons/delete.svg";

const TodosActions = ({
  resetTodo,
  deleteCompletedTodos,
  completedTodosExist,
}) => {
  // completedTodosExist надо создать css class для этой переменой и в зависимости логических значеный менять стили кнопки. Например активное и не активное

  return (
    <div className="todo-actions">
      <button type="Reset" title="Reset all todos" onClick={resetTodo}>
        <img src={reset} alt="" />
      </button>
      <button
        className={`delete-button ${
          completedTodosExist ? "is-for-delete-exist" : ""
        }`}
        title="Delete complited todos"
        type="Delete completed"
        onClick={deleteCompletedTodos}
      >
        <img src={deleteIcon} alt="" />
      </button>
    </div>
  );
};

export default TodosActions;
