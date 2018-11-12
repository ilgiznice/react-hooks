export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const RESET_TODOS = 'RESET_TODOS';

export const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, isDone: !todo.isDone }
          : todo,
      );

    case RESET_TODOS:
      return [];

    default:
      return state;
  }
};
