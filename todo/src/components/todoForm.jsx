import React, { useState, useReducer } from 'react';
import { todoReducer, initialState } from '../reducers/todoReducer';

const TodoForm = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = useState("");

  return (
    <div>
      <h1>Reducer Todo</h1>
    <form>
      <label htmlFor="todo">New Todo</label>
      <input type="text" name="todo" id="todo"/>
      <button>Add New Todo</button>
    </form>
    </div>
  )
}

export default TodoForm;