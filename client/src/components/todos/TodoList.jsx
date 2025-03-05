import Todo from "./Todo";

const TodoList = ({
  todos,
  deleteTodo,
  conpletedHandle,
  isOpen,
  handleToggleTodo,
}) => {
  return (
    <div className="todo-list">
      {!todos?.length && <h2>Todo list is empty</h2>}
      {todos?.map((todo) => (
        <Todo
          key={todo._id}
          todo={todo}
          deleteTodo={deleteTodo}
          conpletedHandle={conpletedHandle}
          isOpen={isOpen}
          handleToggleTodo={handleToggleTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
