/**
 * This component should render the TodoItems inside a <li>
 */
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({items}) => {
  return (
    <ul>
      {items.map((item, index) => <li key={index}><TodoItem {...item} /></li>)}
    </ul>
  );
};

export default TodoList;
