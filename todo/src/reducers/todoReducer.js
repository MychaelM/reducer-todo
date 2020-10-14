
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
    default:
      return state;
  }
}