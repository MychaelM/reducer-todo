import React, { useReducer } from 'react';
import { todoReducer, initialState, TOGGLE_COMPLETED } from '../reducers/todoReducer';

const Todos = (props) => {

  return (
    <div>
      <h1>Todos</h1>
      {props.todos.map(todo => (
        <div
        key={todo.id} 
        onClick={() => props.dispatch({type: TOGGLE_COMPLETED, payload: todo.id})} className={todo.completed ? "todo completed" : "todo"} 
        >
          {todo.item}
        </div>
  ))}
    </div>
  )
}

export default Todos;