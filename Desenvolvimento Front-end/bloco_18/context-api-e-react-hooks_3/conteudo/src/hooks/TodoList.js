import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <div>
      <ol>
        { todos.map((todo) => <li>{ todo }</li>)}
      </ol>
    </div>
  )
}

export default TodoList;
