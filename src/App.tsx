import "./styles/globals.css";
import { TodoList } from "./features/todo/todo-list";

function App() {
  return (
    <>
      <div className="container mt-10 h-screen">
        <div className="mx-auto max-w-xl">
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;
