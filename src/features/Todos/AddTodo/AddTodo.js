import React, { useRef } from 'react';
import nanoid from 'nanoid';
import { ADD_TODO } from '../ducks';

export const AddTodo = ({ dispatch }) => {
  const todoName = useRef('');
  const addTodo = () => {
    dispatch({
      type: ADD_TODO,
      payload: {
        id: nanoid(),
        name: todoName.current.value,
        isDone: false,
      },
    });

    todoName.current.value = '';
  };

  return (
    <div>
      <input type="text" placeholder="Todo name..." ref={todoName} />
      <button onClick={addTodo}>Add todo</button>
    </div>
  );
};
