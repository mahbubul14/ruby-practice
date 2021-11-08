import React, { useState, useContext } from 'react'
import Task from '../component/Task';
import {TodoContext} from '../component/Todocontext'

const TodoList = () => {
  const [tasks, setTasks] = useContext(TodoContext)
return(
  <div>
  {tasks.map(task =>(
    <Task title={task.title} time={task.time} key={task.id} />
  ))}
  </div>
)
};

export default TodoList;
