import { Component } from "react";
import TodosList from './TodosList';
import Header from './Header'

class TodoContainer extends Component {
state = {
  todos:[
    {
      id:1,
      title: "Setup development environment",
      completed: true
    },
    {
      id:2,
      title: "Develop website and add content",
      completed: true
    },
    {
      id:3,
      title: "Deploy to live server",
      completed: true
    }
  ]
};

render() {
  return(
    <div>
      <Header />
      <TodosList todos ={this.state.todos} />
    </div>
  );
}
}
export default TodoContainer;