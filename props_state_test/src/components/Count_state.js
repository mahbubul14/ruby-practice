import React, { useState } from 'react'

const Count = () => {
  const [count, setCount] = useState(0)

  const Increment =() => {
    setCount(count+1)
  }

  const Decrement =() => {
    setCount(count-1)
  }

  let Reset = () =>{
    setCount(0)
  }

    return (
      <div>
        <h1>Count:{count}</h1>
        <button onClick={Increment}>Increment</button>
        <br/><br/>
        <button onClick ={Decrement}>Decrement</button>
        <br/><br/>
        <button onClick={Reset}>Reset</button>
      </div>
    );
  }

  export default Count;
