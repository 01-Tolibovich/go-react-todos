import { useEffect, useState } from "react";
import { TodoForm, TodoList } from "./components/todos";
import "./App.scss";
import { completeTodo, createTodo, getTodos } from "./protocols/rest";
import { deleteTodo } from "./protocols/rest/deleteTodo";

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

  const conpletedHandle = async (e, todoId) => {
    e.stopPropagation();
    setIsLoading(true);
    await completeTodo(todoId)
    await handleGetTodos()
  };

  console.log("rendered");
  

  const [isOpen, setIsOpen] = useState({
    id: null,
    active: false,
  });
  const handleToggleTodo = (e, todoId) => {
    e.stopPropagation();
    setIsOpen((prevState) => ({
      id: todoId,
      active: prevState.id === todoId ? !prevState.active : true,
    }));
  };

  const addTodoHandler = async (title, body) => {
    const newTodo = {
      title,
      body,
    };

    setIsLoading(true)

    await createTodo({...newTodo})
    await handleGetTodos()
  };

  const deleteTodoHandler = async (e, id) => {
    e.stopPropagation();
    setIsLoading(true)
    await deleteTodo(id)
    await handleGetTodos()
  };

  return (
    <>
      <div className="App">
        <div>
          <div className="app-wrapper">
            <header className="App-header">
              <h1>Todo</h1>
            </header>
            <TodoForm addTodo={addTodoHandler} />
            <TodoList
              todos={todos}
              deleteTodo={deleteTodoHandler}
              conpletedHandle={conpletedHandle}
              isOpen={isOpen}
              handleToggleTodo={handleToggleTodo}
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
