import React, { Fragment, useReducer } from 'react';
import { RESET_TODOS, reducer } from './ducks';
import { AddTodo } from './AddTodo';
import { Todo } from './Todo';

console.log(RESET_TODOS, reducer, useReducer);

export const Todos = () => {
  const [state, dispatch] = useReducer(reducer, []);

  console.log(state);

  return (
    <Fragment>
      <button onClick={() => dispatch({ type: RESET_TODOS })}>
        Reset all todos
      </button>
      {state.map(todo => (
        <Todo todo={todo} dispatch={dispatch} />
      ))}
      <AddTodo dispatch={dispatch} />
    </Fragment>
  );
};
