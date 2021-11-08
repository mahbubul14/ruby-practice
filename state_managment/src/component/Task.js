import React from 'react';

const Task = ({ title, time }) => {

return(
  <div>
    <h3>{title}</h3>
    <p>{time}</p>
  </div>
)
};

export default Task;
