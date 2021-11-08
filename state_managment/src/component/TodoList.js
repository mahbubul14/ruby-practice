import React, { useState } from 'react'

const TodoList = () => {
  const [tasks, setTasks] = useState(
    [
      {
        title: 'Wake up',
        time: '5.00PM',
        id: 1
      },
      {
        title: 'Exercise',
        time: '5.00PM',
        id: 2
      },
      {
        title: 'Take breakfast',
        time: '5.00PM',
        id: 3
      },
    ]
  );

return(
  <div>
  {tasks.map(task =>(
    <li>{task.title}</li>
  ))}
  </div>
)
};

export default TodoList;
