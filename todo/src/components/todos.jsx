import React, { useReducer } from 'react';
import { todoReducer, initialState } from '../reducers/todoReducer';

const Todos = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div>
      {state.map(todo => (
        <div>
          <h2>{todo.item}</h2>
        </div>
  ))}
    </div>
  )
}

export default Todos;