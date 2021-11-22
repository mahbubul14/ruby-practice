import React, { useState } from 'react';
import Form from './component/Form';
import TodoList from './component/TodoList';
import './App.css';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h1>Ed's Todo List</h1>
      <Form inputText ={inputText} todos ={todos} setTodos={setTodos} setInputText={setInputText}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;