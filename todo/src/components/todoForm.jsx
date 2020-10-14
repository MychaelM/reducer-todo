import React, { useState, useReducer } from 'react';
import { todoReducer, initialState, ADD_TODO, TOGGLE_COMPLETED, CLEAR_COMPLETED } from '../reducers/todoReducer';
import Todos from './todos';

const TodoForm = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = useState("");

  const handleChanges = e => {
    // console.log(state)
    setNewTodo(e.target.value);
  }

  return (
    <div>
      <h1>Reducer Todo</h1>
    <div>
      <label htmlFor="todo">New Todo</label>
      <input 
      type="text" 
      name="todo" 
      id="todo" 
      value={newTodo} 
      onChange={handleChanges}/>
      <button
      onClick={() => {
        dispatch({ type: ADD_TODO, payload: newTodo });
      }}
      >Add New Todo</button>
    </div>
    <Todos todos={state} dispatch={dispatch} completed={TOGGLE_COMPLETED}/>
    <button
      onClick={() => dispatch({type: CLEAR_COMPLETED})}
    >Clear Completed</button>
    </div>
  )
}

export default TodoForm;