import React, { useState, useReducer } from 'react';
import { todoReducer, initialState, ADD_TODO, TOGGLE_COMPLETED, CLEAR_COMPLETED } from '../reducers/todoReducer';
import Todos from './todos';
import { TextField, Button } from '@material-ui/core';

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
      {/* <label htmlFor="todo">New Todo</label> */}
      <TextField 
      type="text" 
      name="todo" 
      id="standard-basic"
      label="Add Todo" 
      value={newTodo} 
      onChange={handleChanges}/>
      <Button
      variant="contained"
      onClick={() => {
        dispatch({ type: ADD_TODO, payload: newTodo });
      }}
      >Add New Todo</Button>
    </div>
    <Todos todos={state} dispatch={dispatch} completed={TOGGLE_COMPLETED}/>
    <Button
      variant="contained"
      onClick={() => dispatch({type: CLEAR_COMPLETED})}
    >Clear Completed</Button>
    </div>
  )
}

export default TodoForm;