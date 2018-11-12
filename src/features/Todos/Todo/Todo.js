import React from 'react';
import { TOGGLE_TODO } from '../ducks';

export const Todo = ({ todo, dispatch }) => (
  <li>
    <input
      type="checkbox"
      checked={todo.isDone}
      onChange={() => dispatch({ type: TOGGLE_TODO, payload: { id: todo.id } })}
    />
    <span>{todo.name}</span>
  </li>
);
