import React, { useReducer } from 'react';
import { TOGGLE_COMPLETED } from '../reducers/todoReducer';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    // minWidth: 320,
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    height: "100%"
  },
  todoText: {
    fontSize: "1.5rem",
    wordWrap: "normal",
  },
  card: {
    margin: "3%",
  },
  container: {
    height: "500px"
  }
})

const Todos = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
    <h1>Todos</h1>
    <Card className={classes.root}>
      {props.todos.map(todo => (
          <CardContent 
        key={todo.id} 
        onClick={() => props.dispatch({type: TOGGLE_COMPLETED, payload: todo.id})} className={todo.completed ? "todo completed" : "todo"} 
        >
          <Typography className={classes.todoText}>
          {todo.item}
          </Typography>
          </CardContent>
  ))}
        </Card>
    </div>
  )
}

export default Todos;