import React from 'react';
import './App.css';
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App= () => {
  return (
    <div>

      <AddTodo/>
      <TodoList/>

    </div>
  );
}

export default App;
