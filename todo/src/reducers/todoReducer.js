
export const ADD_TODO = "ADD_TODO";

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

    default:
      return state;
  }
}