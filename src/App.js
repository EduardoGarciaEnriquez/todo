//ROOT CONTAINER COMPONENT
import React, {Component} from 'react';
import Todos from './todos.js';
import AddTodo from './addTodo.js';

class App extends Component{
  //set initial states
  state = {
    todos:[
      {id:1, content:'Buy something'},
      {id:2, content:'Clean something'}
    ]
  }

  //function to add a new task
  addTodo = (todo) => {

    //give a random number to the id of every element
    todo.id = Math.random();
    //copy the state and save it in a new array, add the new task content to the array
    let todos = [...this.state.todos, todo];

    //update the state to the last array with the new task added
    this.setState({
      todos : todos
    })
  }

  //delete task
  deleteTodo=(id)=>{

    //for each element return only the ones that are diferent to the element clicked or selected  and save them in a new array
    let todos = this.state.todos.filter( element => {
      return element.id !== id
    })
    //update array to the state
    this.setState({
      todos : todos
    })
  }

  render(){
    return(
      <div className="todo-app container">
      <h1 className="center blue-text">To Do's List</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      <AddTodo addTodo={this.addTodo}/>
      </div>
    )
  }
}
export default App;