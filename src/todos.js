//TO DO'S UI COMPONENT

import React from 'react';

const Todos = ({todos, deleteTodo}) =>{
  //operador ternario sí hay todos hacer: , si no hay: 
  const todoList = todos.length ? (
    todos.map(todo => {
      return(
        <div className="collection-item center" key={todo.id}>
          <span onClick={()=>{deleteTodo(todo.id)}}>{todo.content}</span>
        </div>
      )
    })
  ) : (<p className="center">You have nothing left to do.</p>)

  return(
    <div className="todos collection">
      {//Todos function display
        todoList
      }
    </div>
  )
}

export default Todos;