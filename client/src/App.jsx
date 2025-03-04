import { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoForm, TodoList, TodosActions } from "./components/todos";
import "./App.scss";
import { completeTodo, getTodos } from "./protocols/rest";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [todos, setTodos] = useState([]);


  const handleGetTodos = async () => {
    setIsLoading(true);

    getTodos()
      .then((res) => {
        setTodos(res);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    handleGetTodos();
  }, []);

  const conpletedHandle = async (todoId) => {
    setIsLoading(true);
    await completeTodo(todoId)
    await handleGetTodos()
  };

  console.log("rendered");
  

  const [isOpen, setIsOpen] = useState({
    id: null,
    active: false,
  });
  const handleToggleTodo = (todoId) => {
    setIsOpen((prevState) => ({
      id: todoId,
      active: prevState.id === todoId ? !prevState.active : true,
    }));
  };

  const addTodoHandler = (title, description) => {
    // const newTodo = {
    //   title,
    //   description,
    //   isComplited: false,
    //   id: uuidv4(),
    // };
    // setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // const toggleTodoHandler = (id) => {
  //   setTodos(
  //     todos.map((todo) =>
  //       todo.id === id
  //         ? { ...todo, isComplited: !todo.isComplited }
  //         : { ...todo }
  //     )
  //   );
  // };

  const resetTodoHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodosHandler = () => {
    // setTodos(todos.filter((todo) => !todo.isComplited));
  };

  const complitedTodosCount = todos?.filter((todo) => todo.completed).length;

  return (
    <>
      <div className="App">
        <div>
          <div className="app-wrapper">
            <header className="App-header">
              <h1>Todo</h1>
            </header>
            <TodoForm addTodo={addTodoHandler} />
            {!!todos?.length && (
              <TodosActions
                resetTodo={resetTodoHandler}
                deleteCompletedTodos={deleteCompletedTodosHandler}
                completedTodosExist={!!complitedTodosCount}
              />
            )}
            <TodoList
              todos={todos}
              deleteTodo={deleteTodoHandler}
              conpletedHandle={conpletedHandle}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              handleToggleTodo={handleToggleTodo}
              // isLoading={isLoading}
              // toggleTodo={toggleTodoHandler}
            />
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="loading-bg">
          <div className="load-spiner-wrap">
            <div className="load-spiner"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
