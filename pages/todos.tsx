import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [tmpTodo, setTmpTodo] = useState("");

  const addTodo = () => {
    if (tmpTodo === "") {
      alert("文字を入力してください");
      return;
    }
    setTodos([...todos, tmpTodo]);
    setTmpTodo("");
  };

  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((todo, todoIndex) => {
      return index !== todoIndex;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <h1>Todo App</h1>
      <div className="form">
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          name="todo"
          onChange={(e) => setTmpTodo(e.target.value)}
          value={tmpTodo}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo}
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => deleteTodo(index)}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
      <style>{`
        h1 {
          text-align: center;
        }
        .form {
          display: flex;
          justify-content: center;
        }
        ul {
          width: 200px;
          margin: 10px auto;
        }
      `}</style>
    </>
  );
};

export default App;
