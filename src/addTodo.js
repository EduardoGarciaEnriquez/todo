import React, {Component} from 'react';

class AddTodo extends Component{
  state = {
    content: null
  }
  handleChange =(e)=>{
    //update state to the input value
    this.setState({
      content : e.target.value
    })
  }
  handleSubmit =(e) => {
    //stop refresh page
    e.preventDefault();
    //only add when is not empty
    if (this.state.content === null || this.state.content === ''){
      alert("Enter a valid value");
      }else{
        //pass the updated state as parameter to the addTodo funciton
      this.props.addTodo(this.state);
      //set the content of the input back o empty|null|''
      this.setState({
        content:''
      })
    }
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="todo">New To Do: </label>
          <input type="text" value={this.state.content} onChange={this.handleChange}/>
        </form>
      </div>
    )
  }
}

export default AddTodo;