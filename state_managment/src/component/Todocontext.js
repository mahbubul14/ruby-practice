import React, {useState, createContext} from 'react';

export const TodoContext = createContext()

export const TodoProvider = props => {
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
    <TodoContext.Provider value={[tasks, setTasks]}>
      {props.children}
    </TodoContext.Provider>
  );
}
