import React from 'react';
import './App.css';
import TodoList from './component/TodoList';
import Nav from './component/nav';
import {TodoProvider} from './component/Todocontext'
import AddItem from './component/AddItem'

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <Nav />
        <TodoList />
        <AddItem />
      </div>
    </TodoProvider>
  );
}

export default App;
