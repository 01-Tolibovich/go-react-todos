import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, conpletedHandle, isOpen, setIsOpen, handleToggleTodo, isLoading }) => {
  return (
    <div className="todo-list">
      {!todos?.length && <h2>Todo list is empty</h2>}
      {todos?.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          conpletedHandle={conpletedHandle}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleToggleTodo={handleToggleTodo}
          isLoading={isLoading}
          // toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
