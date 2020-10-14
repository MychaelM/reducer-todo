import React, { useReducer } from 'react';
import { todoReducer, initialState } from '../reducers/todoReducer';

const Todos = (props) => {
  // const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div>
      <h1>Todos</h1>
      {props.todos.map(todo => (
        <div>
          <h2>{todo.item}</h2>
        </div>
  ))}
    </div>
  )
}

export default Todos;