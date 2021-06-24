import { useState } from "react";
import useArray from "./useArray";
import TodoList from "./TodoList";

function TodoInput() {
  const [ newTodo, setNewTodo ] = useState('');
  const { addTodo, todos } = useArray();

  const handleChange = ({ target }) => {
    setNewTodo(target.value);
  }

  const handleClick = () => {
    console.log("aqui")
    addTodo(newTodo)
    setNewTodo('');
  }

  return (
    <section>
      <label htmlFor="add-todo">
        <input
          value={ newTodo }
          onChange={ handleChange }
          type="text"
          name="newTodo"
          id="newTodo"
        />
      </label>
      <button onClick={ () => handleClick() }>Adicionar tarefa</button>
      <TodoList todos={ todos } />
    </section>
  )

}

export default TodoInput;
