import React, {useState} from 'react'

const Home = () => {
  const [count, setState] = useState(0)

  const incrementHandler = () => {
    setState(count+1)
  }

  const decrementHandler = () => {
    setState(count-1)
  }

  const resettHandler = () => {
    setState(0)
  }

  return (
  <div>
    <h1>Welcome to Counter Web App</h1>
    <h2 className="count">Count:{count}</h2>
    <button type="submit" onClick={incrementHandler} className="increment">Increment</button>
    <button type="submit" onClick={decrementHandler} disabled={count === 0} className="decrement">Decrement</button>
    <button type="submit" onClick={resettHandler}>Reset</button>
  </div>
  )
}

export default Home;
