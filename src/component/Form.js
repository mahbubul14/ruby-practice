import React from 'react';

const Form = ({ setInputText, todos, setTodos, inputText }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value)
    setInputText(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  }

  return(
    <div>
      <input value = {inputText} onChange={inputTextHandler} type="text" />
      <button onClick={submitHandler} type="submit">
        Add Book
      </button>
    </div>
  )
}

export default Form;
