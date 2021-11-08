import React,{useContext} from 'react';
import {TodoContext} from '../component/Todocontext'

const Nav = () => {
    const [tasks, setTasks] = useContext(TodoContext);
return(
  <div>
    <h3>TodoList</h3>
    <p>List of item: {tasks.length} </p>
  </div>
)
};

export default Nav;