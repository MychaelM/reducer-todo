
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";

export const initialState = 
  [{  
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  },
  {
    item: "second todo",
    completed: false,
    id: 3892987590
  },
  {
    item: "third todo",
    completed: false,
    id: 3892987591
  }];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {item: action.payload, completed: false, id: Date.now()}]

    case TOGGLE_COMPLETED:
      console.log("Toggling Completed")
     return state.map(todo => {
        if (todo.id === action.payload) {
          console.log("if called");
          return {...todo, completed: !todo.completed};
        } else {
          return todo;
        }
      })

    default:
      return state;
  }
}