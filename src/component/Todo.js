import React from 'react'

const Todo = ( {text, todo, todos, setTodos} ) => {

  const removeHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id))
  }
  return (
    <div>
      <li>{text}</li>
      <button onClick={removeHandler} type="sumbit">Remove</button>
    </div>
  )
}
export default Todo;