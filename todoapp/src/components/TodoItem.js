import React from 'react';

// const TodoItem = (props) => {
//     return <li>{props.todo.title}</li>
// }

// export default TodoItem;


class TodoItem extends React.Component {
  render(){
    return <li>{this.props.todo.title}</li>
}
}

export default TodoItem;

